import { MyContext } from "../App";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
const DailyReportContent = () => {
  const [report] = useContext(MyContext);
  const reports = [...report];
  let navigate = useNavigate();
  const returnClick = () => {
    // '/daily-report-Content'ページに遷移する
    navigate("/daily-report-list");
  };
  return (
    <div className="reports-List">
      <h2 className="reports-title">日報詳細</h2>
      {/* 日報一覧に戻るボタン */}
      <button onClick={returnClick}>一覧に戻る</button>
      <ul>
        {/* reports 配列の各要素に対して map 関数を使用し、各要素を順番に処理 */}
        {reports.map((report, index) => (
          // 上記で設定したindexを一意のキーにしreportsに入ったインデックスを使う
          <li key={index} className="report-item">
            {/*reportに入っているtitleを呼び出す  */}
            <span>{report.title}</span>
            <p>
              <strong>内容:</strong> {report.content}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DailyReportContent;
