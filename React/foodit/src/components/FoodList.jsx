import React, { useState } from "react";
import FoodForm from "./FoodForm";
import "./FoodList.css";

function FoodListItem({ item, onDelete, onEdit }) {
  const { imgUrl, title, calorie, content } = item;

  const handleDeleteClick = () => {
    onDelete(item.id);
  };

  const handleEditClick = () => {
    onEdit(item.id);
  };

  return (
    <div className="FoodListItem">
      <img src={imgUrl} alt={title} />
      <div>{title}</div>
      <div>{calorie}</div>
      <div>{content}</div>
      <button onClick={handleDeleteClick}>삭제</button>
      <button onClick={handleEditClick}>수정</button>
    </div>
  );
}
export default function FoodList({ items, onDelete, onUpdate, onUpdateSuccess }) {
  const [editingId, setEditingId] = useState(null);

  const handleCancel = () => setEditingId(null);

  return (
    <ul className="FoodList">
      {items.map((item) => {
        if (item.id === editingId) {
          const { id, imgUrl, title, calorie, content } = item;
          const initialValues = { id, imgFile: null, title, calorie, content };

          const handleSubmit = (formData) => {
            onUpdate(id, formData);
          };

          const handleSubmitSuccess = (food) => {
            onUpdateSuccess(food);
            setEditingId(null);
          };

          return (
            <li key={item.id}>
              <FoodForm
                initialValues={initialValues}
                initialPreview={imgUrl}
                onCancel={handleCancel}
                onSubmit={handleSubmit}
                handleSubmitSuccess={handleSubmitSuccess}
                item={item}
                onDelete={onDelete}
              />
            </li>
          );
        }

        return (
          <li key={item.id}>
            <FoodListItem item={item} onDelete={onDelete} onEdit={setEditingId} />
          </li>
        );
      })}
    </ul>
  );
}
