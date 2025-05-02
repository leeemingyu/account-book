import { selector } from "recoil";
import { historyState } from "./atom";

export const totalIncomeState = selector({
  key: "totalIncomeState",
  get: ({ get }) => {
    const history = get(historyState);
    return history
      .filter((item) => item.type === "income")
      .reduce((sum, item) => sum + Number(item.amount), 0);
  },
});

export const totalExpenseState = selector({
  key: "totalExpenseState",
  get: ({ get }) => {
    const ledger = get(historyState);
    return ledger
      .filter((item) => item.type === "expense")
      .reduce((sum, item) => sum + Number(item.amount), 0);
  },
});

export const balanceState = selector({
  key: "balanceState",
  get: ({ get }) => {
    const income = get(totalIncomeState);
    const expense = get(totalExpenseState);
    return income - expense;
  },
});
