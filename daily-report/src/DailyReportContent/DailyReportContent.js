import { MyContext } from "../App";
import "./DailyReportContent.css";
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

  // 特定のタイトルを持つレポートを削除するための関数
  const eraseClick = () => {
    const updatedReports = reports.filter((report) => report.title !== title);
    // フィルタリング後の配列でstateを更新
    setReport(updatedReports);
    // 一覧ページに遷移
    navigate("/daily-report-list");
  };

  // 指定されたタイトルのレポートを検索
  const reportDetail = reports.find((report) => report.title === title);

  return (
    <div className="report-content">
      <h2 className="report-title">日報詳細</h2>
      <button className="return-Button" onClick={returnClick}>
        一覧に戻る
      </button>
      {/* 三項演算子を用いてレポートがあればだしてなければレポートが見つかりませんを返す */}
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
