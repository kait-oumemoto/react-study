import React, { useState, useContext } from "react";
import { MyContext } from "../App";
import "./DailyReportForm.css";

function DailyReportForm() {
  // App.jsから他のコンポーネントに渡すstateを取得
  const [reports, setReports] = useContext(MyContext);
  // フォームデータのstateを定義
  const [formData, setFormData] = useState({
    date: "",
    title: "",
    content: "",
  });

  const [errors, setErrors] = useState({});
  // 各フィールドの入力値が変更されるたびに呼び出されます
  const handleChange = (e) => {
    // 今までの入力情報を全て保持しつつ、ユーザーが新たに変更した部分だけを更新
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // setErrorsはerrorsを新しい内容に更新するために使われる
    setErrors((prevErrors) => ({
      ...prevErrors,
      [e.target.name]: "",
    }));
  };
  // バリデーションの設定
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // 不正な場合に対応するエラーメッセージをnewErrorsオブジェクトに追加
    const newErrors = {};
    // 日時フィールドが空の場合は、日時を設定してくださいをセット
    if (!formData.date) {
      newErrors.date = "日時を設定してください";
    }
    // タイトルフィールドが空の場合は、タイトルを入力してください
    if (!formData.title) {
      newErrors.title = "タイトルを入力してください";
    }
    // 内容フィールドが空の場合は、内容が入っていません
    if (!formData.content) {
      newErrors.content = "内容が入っていません";
    }
    // newErrorsの中に何もない（エラーメッセージが一つもない）ことを確認しなければ下記を実行する
    if (Object.keys(newErrors).length === 0) {
      console.log("データを送信しました");
      // 新しいIDを生成
      const newReport = {
        ...formData,
        id: reports.length > 0 ? reports[reports.length - 1].id + 1 : 1,
      };
      // 送信されたreportsを配列としてsetReportsにいれる
      setReports([...reports, newReport]);
      // 中身を空にする
      setFormData({ date: "", title: "", content: "" });
      setErrors({});
    } else {
      setErrors(newErrors);
    }
  };
  return (
    <div className="container">
      <h1 className="heading">日報</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-field">
          <label className="label">日時：</label>
          {/* errors.date をがある場合<span>要素をレンダリング*/}
          {errors.date && <span className="error">{errors.date}</span>}

          <input
            type="date"
            name="date"
            value={formData.date}
            // 入力値の変更時にhandleChange関数が実行させる
            onChange={handleChange}
            className="input"
          />
        </div>
        <div className="form-field">
          <label className="label">タイトル：</label>
          {errors.title && <span className="error">{errors.title}</span>}
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="input"
          />
        </div>
        <div className="form-field">
          <label className="label">内容：</label>
          {errors.content && <span className="error">{errors.content}</span>}
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            className="input"
          />
        </div>
        <button type="submit" className="button">
          送信
        </button>
      </form>
    </div>
  );
}

export default DailyReportForm;
