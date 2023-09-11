import React, { useState } from "react";
import "./FoodForm.css";

export default function FoodForm() {
  const [title, setTitle] = useState("");
  const [calorie, setCalorie] = useState(0);
  const [content, setContent] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleCalorieChange = (e) => {
    const nextRating = Number(e.target.value) || 0;
    setCalorie(nextRating);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, calorie, content });
  };

  return (
    <form className="FoodForm" onSubmit={handleSubmit}>
      <input name="title" value={title} onChange={handleTitleChange} />
      <input name="calorie" value={calorie} type="number" onChange={handleCalorieChange} />
      <textarea name="content" value={content} onChange={handleContentChange} />
    </form>
  );
}
