import React, { useState } from "react";
import "./FoodForm.css";

export default function FoodForm() {
  const [values, setValues] = useState({
    title: "",
    calorie: 0,
    content: "",
  });
  const [title, setTitle] = useState("");
  const [calorie, setCalorie] = useState(0);
  const [content, setContent] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <form className="FoodForm" onSubmit={handleSubmit}>
      <input name="title" value={values.title} onChange={handleChange} />
      <input name="calorie" value={values.calorie} type="number" onChange={handleChange} />
      <textarea name="content" value={values.content} onChange={handleChange} />
      <button type="submit">확인</button>
    </form>
  );
}
