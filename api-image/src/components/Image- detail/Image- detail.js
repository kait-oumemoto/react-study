// 犬の詳細画面

import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { DogContext } from "../Context/DogContext";

const Detail = () => {
  // URLのパラメータから犬のIDを取得
  const { id } = useParams();

  // お気に入りの犬データを管理するコンテキストを取得
  const { dogDataList, setDogDataList } = useContext(DogContext);

  // 犬の詳細情報を保持するstate
  const [dogDetails, setDogDetails] = useState(null);

  // エラーメッセージを保持するstate
  const [error, setError] = useState("");

  // The Dog APIにアクセスするためのキー
  const API_KEY =
    "live_CAYtJ89PvWAC4RfRTjCTNKyNq9j4XrwmbmFgJbaqBydfBHc9Kx2OTK1EWKxBuwSw";

  // 通知メッセージのstate
  const [notification, setNotification] = useState("");

  // 副作用の処理
  useEffect(() => {
    // asyncで非同期関数の宣言
    const fetchDogDetails = async () => {
      try {
        // axios.get を使って指定された id の犬の詳細情報をThe Dog APIから取得
        const response = await axios.get(
          `https://api.thedogapi.com/v1/images/${id}`,
          {
            headers: {
              "x-api-key": API_KEY,
            },
          }
        );
        console.log("Dog details fetched:", response.data);
        // 取得したデータを dogDetails 状態に設定
        setDogDetails(response.data);
        setError("");
        // エラーが発生した場合には setError でエラーメッセージを設定
      } catch (error) {
        console.error("Error fetching dog details:", error);
        setError("犬の詳細情報を取得中にエラーが発生しました。");
      }
    };
    // URLの id パラメータや API_KEY が変わると、再度犬の詳細情報を取得
    fetchDogDetails();
  }, [id, API_KEY]);

  // お気に入りリストに追加する関数
  const addFavorite = () => {
    if (dogDetails) {
      // dogDetails の情報をもとに favoriteDog オブジェクトを作成
      const favoriteDog = {
        id: dogDetails.id,
        imageUrl: dogDetails.url,
        breed: dogDetails.breeds
          ? dogDetails.breeds[0]
          : { name: "Unknown Breed" },
      };
      // setDogDataList を使って、お気に入りリストに favoriteDog を追加
      setDogDataList([...dogDataList, favoriteDog]);
      setNotification("お気に入りに登録しました！");
      setTimeout(() => setNotification(""), 3000); // 3秒後に通知をクリア
    }
  };

  // 現在表示されている犬と同じ品種の別の犬の画像をAPIから取得し、dogDetails に状態を更新
  // asyncで非同期関数の宣言
  const changeClick = async () => {
    if (dogDetails && dogDetails.breeds && dogDetails.breeds.length > 0) {
      const breedId = dogDetails.breeds[0].id;
      try {
        console.log("Fetching new dog image with breed ID:", breedId);
        const response = await axios.get(
          `https://api.thedogapi.com/v1/images/search`,
          {
            headers: {
              "x-api-key": API_KEY,
            },
            params: {
              breed_id: breedId,
              limit: 3,
            },
          }
        );
        console.log("New dog image fetched:", response.data);
        if (response.data.length > 0) {
          const newDogDetails = response.data[0];
          // 品種IDを取得し、APIリクエストを送信して新しい犬の画像を取得
          if (newDogDetails.breeds && newDogDetails.breeds.length > 0) {
            // 取得したデータを dogDetails 状態に設定
            setDogDetails(newDogDetails);
            setError(""); // エラーをクリア

            //  品種情報がない場合やエラーが発生した場合にエラーメッセージを設定
          } else {
            setError("新しい犬の画像には品種情報が含まれていません。");
          }
        }
      } catch (error) {
        console.error("Error fetching new dog image:", error);
        setError("新しい犬の画像を取得中にエラーが発生しました。");
      }
    } else {
      console.log("No breed information available to fetch new image.");
      setError("品種情報がありません。新しい犬の画像を取得できません。");
    }
  };

  return (
    <div>
      <h2>犬の詳細</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {/* 通知メッセージを表示 */}
      {notification && <p>{notification}</p>}
      <div className="dogs-list">
        {dogDetails ? (
          <div className="dog-item">
            <img src={dogDetails.url} alt={`Dog ${dogDetails.id}`} />
            {dogDetails.breeds && dogDetails.breeds.length > 0 ? (
              <>
                <p>品種: {dogDetails.breeds[0].name}</p>
                <p>生息地: {dogDetails.breeds[0].origin}</p>
                <p>体重: {dogDetails.breeds[0].weight.metric} kg</p>
                <p>身長: {dogDetails.breeds[0].height.metric} cm</p>
              </>
            ) : (
              <p>品種情報がありません。</p>
            )}
          </div>
        ) : (
          <p>詳細情報が取得できません。</p>
        )}
      </div>
      <button onClick={addFavorite}>お気に入りボタン</button>
      <button onClick={changeClick}>同じ品種の他の犬を見る</button>
    </div>
  );
};

export default Detail;
