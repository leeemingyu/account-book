import React, { useState } from "react";
import css from "./ViewHistory.module.css";
import Modal from "./Modal";

const ViewHistory = ({ historyData, handleDeleteHistory }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const reversedData = [...historyData].reverse();
  const [selectedItem, setSelectedItem] = useState("");

  const handleModalConfirm = () => {
    handleDeleteHistory(selectedItem);
    setIsModalOpen(false);
  };
  const handleDeleteBtn = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className={css.viewHistory}>
        <h2>내역</h2>
        <div>
          {reversedData.map((item, i) => (
            <div
              className={`${css.historyCard} ${
                item.type === "income" ? css.Income : css.Expense
              }`}
              key={i}
            >
              <div>{item.desc}</div>
              <div>
                <div>
                  {item.type === "income" ? "+" : "-"}
                  {item.amount}₩
                </div>
                <div>
                  <button onClick={() => handleDeleteBtn(item)}>삭제</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isModalOpen && (
        <Modal
          handleModalClose={handleModalClose}
          handleModalConfirm={handleModalConfirm}
        />
      )}
    </>
  );
};

export default ViewHistory;
