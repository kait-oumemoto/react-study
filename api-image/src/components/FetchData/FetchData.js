// 犬一覧

import React, { useState, useEffect, useContext } from "react";
import { DogContext } from "../Context/DogContext";
import { useNavigate } from "react-router-dom";
import "./FetchData.css";
// axiosはHTTPクライアントライブラリ
// APIエンドポイント(コンピュータが他のコンピュータにメッセージを送るために使う特定の場所)にHTTPリクエストを送信し、サーバーからデータを取得するためのもの
import axios from "axios";

const FetData = () => {
  // 状態変数 `data` とその更新関数 `setData` を定義
  // 画像を取得するためのstate
  const [imageUrl, setImageUrl] = useState([]);

  // お気に入りの犬データを管理するコンテキストを取得
  const { dogDataList, setDogDataList } = useContext(DogContext);
  // アプリケーション内でプログラム的にナビゲート（ページ遷移）するために使用
  const navigate = useNavigate();
  // APIにアクセスするためのキー
  const API_KEY =
    "live_CAYtJ89PvWAC4RfRTjCTNKyNq9j4XrwmbmFgJbaqBydfBHc9Kx2OTK1EWKxBuwSw"; // APIキーをここに入力

  //asyncを使って非同期関数を宣言
  const fetchDogImage = async () => {
    // エラーが発生する可能性のあるコードを安全に実行するために使用される構文
    try {
      // リクエストが成功するとresponseに結果が格納
      // awaitを使用して非同期処理が完了するのを待つ
      // axios.getでAPIリクエスト
      const response = await axios.get(
        "https://api.thedogapi.com/v1/images/search",
        {
          headers: {
            // x-api-key: API_KEYという変数に格納されているAPIキーを使用して、リクエスト
            "x-api-key": API_KEY,
          },
          params: {
            // 品種情報を含む画像を取得するためのパラメータ
            has_breeds: true,
            // 取得する画像の数
            limit: 12,
          },
        }
      );

      console.log(response.data);
      // 配列に少なくとも1つの要素が含まれていれば真なので、中の処理を実行
      if (response.data.length > 0) {
        // APIから取得したデータを整形して、fetchedDogs配列に格納
        const fetchedDogs = response.data.map((dogData) => {
          const breed = dogData.breeds[0] || {
            name: "Unknown Breed",
            origin: "Unknown",
            life_span: "Unknown",
            temperament: "Unknown",
            weight: { metric: "Unknown" },
            height: { metric: "Unknown" },
          };
          return {
            id: dogData.id,
            imageUrl: dogData.url,
            breed: {
              name: breed.name,
              origin: breed.origin,
              life_span: breed.life_span,
              temperament: breed.temperament,
              weight: breed.weight.metric,
              height: breed.height.metric,
            },
          };
        });
        setImageUrl(fetchedDogs);
      }
      // catchブロックは、tryブロック内でエラーが発生した場合に実行されエラーメッセージされる。
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  // 副作用を処理するための
  useEffect(() => {
    // fetchDogImage関数を呼び出す
    fetchDogImage();
  }, [API_KEY]);
  // お気に入り登録
  const Registration = (dog) => {
    // 配列に新しいデータを追加
    setDogDataList([...dogDataList, dog]);
  };
  // 違う犬の画像一覧の更新関数
  const NextDog = () => {
    fetchDogImage();
  };
  // 詳細画面に遷移する関数
  const showDetails = (id) => {
    navigate(`/detail/${id}`);
  };
  return (
    <div className="dogs-list">
      {imageUrl.length > 0 ? (
        imageUrl.map((dog, index) => (
          <div key={index} className="dog-item">
            <img
              src={dog.imageUrl}
              alt={`Dog ${index}`}
              onClick={() => showDetails(dog.id)}
            />
            <p>品種: {dog.breed.name}</p>
            <button onClick={() => Registration(dog)}>お気に入り</button>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
      <button className="dog-next" onClick={NextDog}>
        違う犬を探す
      </button>
    </div>
  );
};

export default FetData;
