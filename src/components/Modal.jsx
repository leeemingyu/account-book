import React, { useEffect } from "react";
import css from "./Modal.module.css";

const Modal = ({ handleModalClose, handleModalConfirm }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        handleModalClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleModalClose]);

  return (
    <div className={css.wrapper} onClick={handleModalClose}>
      <div className={css.container} onClick={(e) => e.stopPropagation()}>
        <div>삭제 하시겠어요?</div>
        <div className={css.btnWrapper}>
          <button onClick={handleModalClose}>닫기</button>
          <button onClick={handleModalConfirm}>삭제</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
