import React, { useState } from "react";
import { createFood } from "../API/API";
import FileInput from "./FileInput";
import "./FoodForm.css";

const INITIAL_VALUES = {
  title: "",
  calorie: 0,
  content: "",
  imgFile: null,
};
function sanitize(type, value) {
  switch (type) {
    case "number":
      return Number(value) || 0;

    default:
      return value;
  }
}

export default function FoodForm({ onSubmitSuccess }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittingError, setSubmittingError] = useState(null);
  const [values, setValues] = useState(INITIAL_VALUES);

  const handleChange = (name, value) => {
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    handleChange(name, sanitize(type, value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("imgFile", values.imgFile);
    formData.append("title", values.title);
    formData.append("calorie", values.calorie);
    formData.append("content", values.content);

    let result;
    try {
      setIsSubmitting(null);
      setIsSubmitting(true);
      result = await createFood(formData);
    } catch (error) {
      setSubmittingError(error);
      return;
    } finally {
      setIsSubmitting(false);
    }

    const { food } = result;
    onSubmitSuccess(food);
    setValues(INITIAL_VALUES);

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
