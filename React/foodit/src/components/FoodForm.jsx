import React, { useState } from "react";
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

export default function FoodForm({
  initialValues = INITIAL_VALUES,
  initialPreview,
  onCancel,
  onSubmitSuccess,
  onSubmit,
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittingError, setSubmittingError] = useState(null);
  const [values, setValues] = useState(initialValues);

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
      console.log(onSubmit);
      result = await onSubmit(formData);
      console.log("츄라이", result);
    } catch (error) {
      setSubmittingError(error);
      return;
    } finally {
      setIsSubmitting(false);
    }

    const { food } = result;
    onSubmitSuccess(food);
    setValues(INITIAL_VALUES);

    console.log("d", values);
  };

  return (
    <form className="FoodForm" onSubmit={handleSubmit}>
      <FileInput name="imgFile" value={values.imgFile} initialPreview={initialPreview} onChange={handleChange} />
      <input name="title" value={values.title} onChange={handleInputChange} />
      <input name="calorie" value={values.calorie} type="number" onChange={handleInputChange} />
      <textarea name="content" value={values.content} onChange={handleInputChange} />
      {onCancel && (
        <button type="button" onClick={onCancel}>
          취소
        </button>
      )}
      <button type="submit" disabled={isSubmitting}>
        확인
      </button>
      {submittingError && <p>{submittingError.message}</p>}
    </form>
  );
}
