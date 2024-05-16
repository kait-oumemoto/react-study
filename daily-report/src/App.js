import DailyReportForm from "./DailyReportForm/DailyReportForm";
import DailyReportList from "./DailyReportList/DailyReportList";
import DailyReportContent from "./DailyReportContent/DailyReportContent";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useState, createContext } from "react";
import Home from "./Home";
import "./App.css";
// stateを子コンポーネントが呼び出せるようにexport
export const MyContext = createContext();

function App() {
  const [state, setState] = useState([]);
  return (
    <Router>
      <div>
        <nav className="header">
          <h3>日報管理アプリ</h3>
          <ul className="nav-links">
            <li>
              {/* Linkをクッリクすることで　toに入れられたページへ遷移 */}
              <Link to="/">ホームページ</Link>
            </li>
          </ul>
        </nav>
        {/* 各コンポーネントに渡すstateを設定 */}
        <MyContext.Provider value={[state, setState]}>
          {/* React Routerでページ遷移をできるようにしている */}
          <Routes>
            {/* 画面に遷移できるReactアプリケーションの設定 */}
            <Route path="/" element={<Home />} />
            <Route path="/daily-report-form" element={<DailyReportForm />} />
            <Route path="/daily-report-list" element={<DailyReportList />} />
            <Route
              path="/daily-report-content/:title"
              element={<DailyReportContent />}
            />
          </Routes>
        </MyContext.Provider>
      </div>
    </Router>
  );
}

export default App;
