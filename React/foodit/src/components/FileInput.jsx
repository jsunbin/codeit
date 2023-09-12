import React from "react";

export default function FileInput({ name, value, onChange }) {
  const handleChange = (e) => {
    const nextValue = e.target.files[0];
    onChange(name, nextValue);
  };
  return <input type="file" onChange={handleChange} />;
}