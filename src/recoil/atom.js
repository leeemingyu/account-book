import { atom } from "recoil";

const localStorageKey = "history";

export const historyState = atom({
  key: "historyState",
  default: JSON.parse(localStorage.getItem(localStorageKey)) || [],
  effects_UNSTABLE: [
    ({ onSet }) => {
      onSet((newValue) => {
        localStorage.setItem(localStorageKey, JSON.stringify(newValue));
      });
    },
  ],
});
