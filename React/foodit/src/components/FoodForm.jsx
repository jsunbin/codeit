import React, { useState } from "react";
import FileInput from "./FileInput";
import "./FoodForm.css";

export default function FoodForm() {
  const [values, setValues] = useState({
    title: "",
    calorie: 0,
    content: "",
    imgFile: null,
  });

  const handleChange = (name, value) => {
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <form className="FoodForm" onSubmit={handleSubmit}>
      <FileInput name="imgFile" value={values.imgFile} onChange={handleChange} />
      <input name="title" value={values.title} onChange={handleInputChange} />
      <input name="calorie" value={values.calorie} type="number" onChange={handleInputChange} />
      <textarea name="content" value={values.content} onChange={handleInputChange} />
      <button type="submit">확인</button>
    </form>
  );
}
