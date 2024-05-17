import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>ホーム</h2>
      <p></p>
      <nav>
        <ul>
          <li>
            <Link to="/daily-report-form">日報作成画面</Link>
          </li>
          <li>
            <Link to="/daily-report-list">日報一覧</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
