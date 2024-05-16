import React, { useState, useContext } from "react";
import { MyContext } from "../App";
import "./DailyReportForm.css";

function DailyReportForm() {
  const [reports, setReports] = useContext(MyContext);
  const [formData, setFormData] = useState({
    date: "",
    title: "",
    content: "",
  });

  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    setErrors((prevErrors) => ({
      ...prevErrors,
      [e.target.name]: "",
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    const newErrors = {};
    if (!formData.date) {
      newErrors.date = "日時を設定してください";
    }

    if (!formData.title) {
      newErrors.title = "タイトルを入力してください";
    }

    if (!formData.content) {
      newErrors.content = "内容が入っていません";
    }

    if (Object.keys(newErrors).length === 0) {
      console.log("データを送信しました");
      setReports([...reports, formData]);
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
          {errors.date && <span className="error">{errors.date}</span>}
          <input
            type="date"
            name="date"
            value={formData.date}
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
