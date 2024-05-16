import { MyContext } from "../App";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

const DailyReportList = () => {
  const [report, setReport] = useContext(MyContext);
  const reports = [...report];

  // 日付順にソート（順番に並び替える）
  reports.sort((a, b) => new Date(b.date) - new Date(a.date));

  // navigateオブジェクトを取得しReact Routerの内部でページ遷移を管理するために使用
  let navigate = useNavigate();

  const handleClick = (title) => {
    // '/daily-report-Content'ページに遷移する
    navigate(`/daily-report-content/${encodeURIComponent(title)}`);
  };

  const eraseClick = (title) => {
    const updatedReports = reports.filter((report) => report.title !== title);
    setReport(updatedReports);
  };

  return (
    <div className="reports-List">
      <h2 className="reports-title">日報一覧</h2>
      <ul>
        {/* reports 配列の各要素に対して map 関数を使用し、各要素を順番に処理 */}
        {reports.map((report, index) => (
          // 上記で設定したindexを一意のキーにしreportsに入ったインデックスを使う
          <li key={index} className="report-item">
            {/*reportに入っているdateを呼び出す  */}
            <h3>{report.date}</h3>
            {/*reportに入っているtitleを呼び出す  */}
            <h3
              onClick={() => handleClick(report.title)}
              style={{ cursor: "pointer", color: "blue" }}
            >
              {report.title}
            </h3>
            <button onClick={() => eraseClick(report.title)}>消去</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DailyReportList;
