import { MyContext } from "../App";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
const DailyReportContent = () => {
  const { title } = useParams();
  const [report, setReport] = useContext(MyContext);
  const reports = [...report];
  let navigate = useNavigate();

  const returnClick = () => {
    // '/daily-report-Content'ページに遷移する
    navigate("/daily-report-list");
  };

  const eraseClick = () => {
    const updatedReports = reports.filter((report) => report.title !== title);
    setReport(updatedReports); // フィルタリング後の配列でstateを更新
    navigate("/daily-report-list"); // 一覧ページに遷移
  };

  const reportDetail = reports.find((report) => report.title === title);

  return (
    <div className="report-content">
      <h2 className="report-title">日報詳細</h2>
      <button onClick={returnClick}>一覧に戻る</button>
      {reportDetail ? (
        <div className="report-detail">
          <h3>日時:{reportDetail.date}</h3>
          <h3>タイトル：{reportDetail.title}</h3>
          <p>
            <strong>内容:</strong> {reportDetail.content}
          </p>
          <button onClick={eraseClick}>消去</button>
        </div>
      ) : (
        <p>レポートが見つかりません。</p>
      )}
    </div>
  );
};

export default DailyReportContent;
