import { MyContext } from "../App";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const DailyReportList = () => {
  const [report] = useContext(MyContext);
  const reports = [...report];
  // 日付順にソート（順番に並び替える）
  reports.sort((a, b) => new Date(b.date) - new Date(a.date));
  // navigateオブジェクトを取得しReact Routerの内部でページ遷移を管理するために使用
  let navigate = useNavigate();

  const handleClick = () => {
    // '/daily-report-Content'ページに遷移する
    navigate("/daily-report-Content");
  };

  return (
    <div className="reports-List">
      <h2 className="reports-title">日報一覧</h2>
      <ul>
        {reports.map((report, index) => (
          <li key={index} className="report-item">
            <h3>{report.date}</h3>

            <h3 onClick={handleClick}>{report.title}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DailyReportList;
