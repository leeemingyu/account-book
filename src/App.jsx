import "./App.css";
import css from "./App.module.css";

function App() {
  return (
    <div className={css.wrapper}>
      <h1>용돈기입장</h1>

      <div>
        <div className={css.balance}>
          <h2>잔액</h2>
          <div>₩200,000</div>
        </div>

        <div className={css.summary}>
          <div>
            <h2>수입</h2>
            <div>₩300,000</div>
          </div>
          <div>
            <h2>지출</h2>
            <div>₩100,000</div>
          </div>
        </div>
      </div>

      <div>
        <div className={css.addHistory}>
          <h2>새로운 거래 추가</h2>
          <div>
            <div>
              <label>
                <input type="radio" name="type" id="" /> 수입
              </label>
              <label>
                <input type="radio" name="type" id="" /> 지출
              </label>
            </div>
            {/* <label htmlFor="description">내용</label> */}
            <input type="text" id="description" placeholder="내용 입력..." />

            {/* <label htmlFor="amount">금액</label> */}
            <input type="text" id="amount" placeholder="금액 입력..." />
            <button>거래 추가</button>
          </div>
        </div>

        <div className={css.viewHistory}>
          <h2>내역</h2>
          <div>
            <div className={css.historyCard}>
              <div>4월 용돈</div>
              <div>
                <div>+₩100,000</div>
                <div>
                  <button>삭제</button>
                </div>
              </div>
            </div>
            <div className={css.historyCard}>
              <div>4월 용돈</div>
              <div>
                <div>+₩100,000</div>
                <div>
                  <button>삭제</button>
                </div>
              </div>
            </div>
            <div className={css.historyCard}>
              <div>4월 용돈</div>
              <div>
                <div>+₩100,000</div>
                <div>
                  <button>삭제</button>
                </div>
              </div>
            </div>
            <div className={css.historyCard}>
              <div>4월 용돈</div>
              <div>
                <div>+₩100,000</div>
                <div>
                  <button>삭제</button>
                </div>
              </div>
            </div>
            <div className={css.historyCard}>
              <div>4월 용돈</div>
              <div>
                <div>+₩100,000</div>
                <div>
                  <button>삭제</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
