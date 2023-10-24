import React from "react";
import classNames from "classnames";
import styles from "./MbtiSelect.module.css";
import NewSection from "./NewSection";

const optionGroups = [
  [
    { value: "E", label: "외향형" },
    { value: "I", label: "내향형" },
  ],
  [
    { value: "S", label: "감각형" },
    { value: "N", label: "직관형" },
  ],
  [
    { value: "T", label: "사고형" },
    { value: "F", label: "감정형" },
  ],
  [
    { value: "J", label: "판단형" },
    { value: "P", label: "인식형" },
  ],
];

function MBTIOptionCard({ selected, label, value, onClick }) {
  const cardClassName = selected ? classNames(styles["mbti-option-card"], styles.selected) : styles["mbti-option-card"];

  return (
    <div className={cardClassName} onClick={onClick}>
      <strong>{value}</strong>
      {label}
    </div>
  );
}

function MBTIOption({ options, value, onChange }) {
  return (
    <div className={styles["mbti-option"]}>
      {options.map((option) => (
        <MBTIOptionCard
          key={option.value}
          selected={option.value === value}
          label={option.label}
          value={option.value}
          onClick={() => onChange(option.value)}
        />
      ))}
    </div>
  );
}

export default function MbtiSelect({ value = "ESTJ", onChange }) {
  const handleChangeAt = (val, position) => {
    const nextValue = value.slice(0, position) + val + value.slice(position + 1);
    onChange(nextValue);
  };

  return (
    <NewSection>
      <h2 className={styles["mbti-section-title"]}>MBTI</h2>
      {optionGroups.map((options, index) => (
        <MBTIOption
          key={`${options[0].value}-${options[1].value}`}
          value={value[index]}
          options={options}
          onChange={(val) => handleChangeAt(val, index)}
        />
      ))}
    </NewSection>
  );
}
