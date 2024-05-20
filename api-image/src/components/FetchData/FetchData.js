import React, { useState, useEffect } from "react";
import "./FetchData.css";

// axiosはHTTPクライアントライブラリ
// APIエンドポイント(コンピュータが他のコンピュータにメッセージを送るために使う特定の場所)にHTTPリクエストを送信し、サーバーからデータを取得するためのもの
import axios from "axios";
const FetData = () => {
  // 状態変数 `data` とその更新関数 `setData` を定義
  // 画像を取得するためのstate
  const [imageUrl, setImageUrl] = useState("");
  // 品種を取得し保持しておくためのstate
  const [breed, setBreed] = useState("");
  // APIにアクセスするためのキー
  const API_KEY =
    "live_CAYtJ89PvWAC4RfRTjCTNKyNq9j4XrwmbmFgJbaqBydfBHc9Kx2OTK1EWKxBuwSw"; // APIキーをここに入力
  // 副作用を処理するための
  useEffect(() => {
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
              limit: 2,
            },
          }
        );
        // 配列には少なくとも1つの要素が含まれていれば真なので、中の処理を実行
        if (response.data.length > 0) {
          const dogData = response.data[0];
          // 最初の要素（response.data[0]）のURLプロパティ（url）を取り出しす
          // その値をsetImageUrl関数を使って状態に保存
          setImageUrl(response.data[0].url);
          if (dogData.breeds && dogData.breeds.length > 0) {
            setBreed(dogData.breeds[0].name);
          } else {
            // 品種情報がない場合のデフォルト値
            setBreed("Unknown Breed");
          }
        }
        // catchブロックは、tryブロック内でエラーが発生した場合に実行されエラーメッセージされる。
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // fetchDogImage関数を呼び出す
    fetchDogImage();
    // useEffectの依存配列が空のため、この副作用はコンポーネントの最初のマウント時に一度だけ実行
  }, []);
  return (
    <div>
      {/* imageUrlが存在する場合は画像を表示し、存在しない場合は「Loading...」というテキストを表示 */}
      {imageUrl ? <img src={imageUrl} alt="Random Dog" /> : <p>Loading...</p>}
      {/* 品種情報を表示 */}
      <p>品種: {breed}</p>
    </div>
  );
};

export default FetData;
