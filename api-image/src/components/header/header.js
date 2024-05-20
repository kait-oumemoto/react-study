import React from "react";
import { Link } from "react-router-dom";
import "./header.css"; // Headerコンポーネントに対応するCSSファイルをインポート

const Header = () => {
  return (
    <header className="header">
      <Link to="/image" className="logo">
        犬の画像ギャラリーアプリ
      </Link>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/image">犬の画像一覧画面</Link>
          </li>
          <li>
            <Link to="/image">お気に入り画像</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
