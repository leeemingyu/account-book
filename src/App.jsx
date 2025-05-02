import css from "./App.module.css";
import AddHistory from "./components/AddHistory";
import Balance from "./components/balance";
import Summary from "./components/Summary";
import ViewHistory from "./components/ViewHistory";

function App() {
  return (
    <div className={css.wrapper}>
      <h1>용돈기입장</h1>
      <div>
        <Balance />
        <Summary />
      </div>
      <div>
        <AddHistory />
        <ViewHistory />
      </div>
    </div>
  );
}

export default App;
