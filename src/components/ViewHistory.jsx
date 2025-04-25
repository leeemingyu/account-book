import React, { useEffect, useRef, useState } from "react";
import css from "./ViewHistory.module.css";
import Modal from "./Modal";

const ViewHistory = ({ historyData, handleDeleteHistory }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const reversedData = [...historyData].reverse();
  const [selectedItem, setSelectedItem] = useState("");

  const historyListRef = useRef(null);

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
  useEffect(() => {
    if (historyListRef.current) {
      historyListRef.current.scrollTop = 0;
    }
  }, [historyData]);

  return (
    <>
      <div className={css.viewHistory}>
        <h2>내역</h2>
        <div ref={historyListRef}>
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
                  {parseInt(item.amount).toLocaleString()}₩
                </div>
                <div>
                  <div
                    className={css.delBtn}
                    onClick={() => handleDeleteBtn(item)}
                  >
                    삭제
                  </div>
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
