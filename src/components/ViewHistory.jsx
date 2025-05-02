import React, { useEffect, useRef, useState } from "react";
import css from "./ViewHistory.module.css";
import Modal from "./Modal";
import { useRecoilState } from "recoil";
import { historyState } from "../recoil/atom";

const ViewHistory = () => {
  const [history, setHistory] = useRecoilState(historyState);
  const reversedData = [...history].reverse();
  const [selectedItem, setSelectedItem] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const historyListRef = useRef(null);

  const handleModalConfirm = () => {
    deleteItem(selectedItem);
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
  }, [history]);
  const deleteItem = (deleteItem) => {
    const updatedHistory = history.filter((item) => item != deleteItem);
    setHistory(updatedHistory);
  };
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
                <div
                  className={`${css.amount} ${
                    item.type === "income" ? css.Income : css.Expense
                  }`}
                >
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
