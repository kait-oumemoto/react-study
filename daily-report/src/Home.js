import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>ホーム</h2>
      <h3>この日報管理アプリケーションを使う上での手順</h3>
      <ul>
        <ol>
          <p>①ヘッダーから日報作成をクリックすることで遷移</p>
        </ol>
        <ol>
          <p>②日報作成をしたらヘッダーから日報一覧をクリックすることで遷移</p>
        </ol>
        <ol>
          <p>
            ③日付け、タイトルがあるのでタイトルをクリックすることで詳細に遷移します。
          </p>
        </ol>
        <ol>
          <p></p>
        </ol>
      </ul>
    </div>
  );
}

export default Home;
