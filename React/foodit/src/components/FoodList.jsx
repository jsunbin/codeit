import React from "react";
import "./FoodList.css";

function FoodListItem({ item }) {
  const { imgUrl, title, calorie, content } = item;

  return (
    <div className="FoodListItem">
      <img src={imgUrl} alt={title} />
      <div>{title}</div>
      <div>{calorie}</div>
      <div>{content}</div>
    </div>
  );
}
export default function FoodList({ items }) {
  return (
    <ul className="FoodList">
      {items.map((item) => {
        return (
          <li>
            <FoodListItem item={item} />
          </li>
        );
      })}
    </ul>
  );
}
