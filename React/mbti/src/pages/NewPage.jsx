import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ColorInput from "../components/ColorInput";
import Container from "../components/Container";
import MbtiSelect from "../components/MbtiSelect";
import styles from "./NewPage.module.css";

export default function NewPage() {
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState({
    mbti: "ESTJ",
    colorCode: "#000000",
  });

  const handleChange = (name, value) => {
    setFormValue((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <Container className="new">
        <header className={styles["new-header"]}>
          <h1 className={styles["add-new-color-title"]}>새 컬러 등록하기</h1>
          <button
            type="button"
            className={styles["close-btn"]}
            onClick={() => {
              navigate("/");
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1.35792 1L13 13M12.6421 1L1 13" stroke="#464E5E" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </header>

        <MbtiSelect value={formValue.mbti} onChange={(newMbti) => handleChange("mbti", newMbti)} />
        <ColorInput />

        <button type="submit" className={styles["color-submit-btn"]}>
          컬러 등록
        </button>
      </Container>
    </>
  );
}
