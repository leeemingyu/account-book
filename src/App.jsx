import { useEffect, useState } from "react";
import css from "./App.module.css";
import AddHistory from "./components/AddHistory";
import Balance from "./components/balance";
import Summary from "./components/Summary";
import ViewHistory from "./components/ViewHistory";

function App() {
  const [historyData, setHistoryData] = useState([]);
  const [balance, setBalance] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);

  useEffect(() => {
    const prevData = JSON.parse(localStorage.getItem("history") || "[]");
    setHistoryData(prevData);
    calculateTotal(prevData);
  }, []);

  const calculateTotal = (data) => {
    const sumIncome = data
      .filter((item) => item.type === "income")
      .reduce((acc, item) => {
        const amount = parseInt(item.amount, 10);
        if (!isNaN(amount)) {
          return acc + amount;
        }
        return acc;
      }, 0);

    const sumExpense = data
      .filter((item) => item.type === "expense")
      .reduce((acc, item) => {
        const amount = parseInt(item.amount, 10);
        if (!isNaN(amount)) {
          return acc + amount;
        }
        return acc;
      }, 0);

    setTotalIncome(sumIncome);
    setTotalExpense(sumExpense);
    setBalance(sumIncome - sumExpense);
  };

  const handleAddHistory = (updatedData) => {
    console.log(updatedData);

    setHistoryData(updatedData);
    calculateTotal(updatedData);
  };
  const handleDeleteHistory = (DeleteItem) => {
    const updatedData = historyData.filter((item) => item !== DeleteItem);
    localStorage.setItem("history", JSON.stringify(updatedData));
    setHistoryData(updatedData);
    calculateTotal(updatedData);
  };

  return (
    <div className={css.wrapper}>
      <h1>용돈기입장</h1>
      <div>
        <Balance balance={balance} />
        <Summary totalIncome={totalIncome} totalExpense={totalExpense} />
      </div>
      <div>
        <AddHistory handleAddHistory={handleAddHistory} />
        <ViewHistory
          historyData={historyData}
          handleDeleteHistory={handleDeleteHistory}
        />
      </div>
    </div>
  );
}

export default App;
