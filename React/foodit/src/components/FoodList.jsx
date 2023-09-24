import React, { useState } from "react";
import { useContext } from "react";
import LocaleContext from "../contexts/LocaleContext";
import useTranslate from "../hooks/useTranslate";
import FoodForm from "./FoodForm";
import "./FoodList.css";

function FoodListItem({ item, onDelete, onEdit }) {
  const t = useTranslate();
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
      <button onClick={handleEditClick}>{t("edit button")}</button>
      <button onClick={handleDeleteClick}>{t("delete button")}</button>
    </div>
  );
}

export default function FoodList({ items, onUpdate, onUpdateSuccess, onDelete }) {
  const [editingId, setEditingId] = useState(null);

  const handleCancel = () => {
    setEditingId(null);
  };

  return (
    <ul className="FoodList">
      {items.map((item) => {
        if (item.id === editingId) {
          const { id, imgUrl, title, calorie, content } = item;
          const initialValues = { title, calorie, content, imgFile: null };

          const handleSubmit = (formData) => onUpdate(id, formData);

          const handleSubmitSuccess = (newItem) => {
            onUpdateSuccess(newItem);
            setEditingId(null);
          };

          return (
            <li key={item.id}>
              <FoodForm
                initialValues={initialValues}
                initialPreview={imgUrl}
                onSubmit={handleSubmit}
                onSubmitSuccess={handleSubmitSuccess}
                onCancel={handleCancel}
              />
            </li>
          );
        }
        return (
          <li key={item.id}>
            <FoodListItem item={item} onEdit={setEditingId} onDelete={onDelete} />
          </li>
        );
      })}
    </ul>
  );
}
