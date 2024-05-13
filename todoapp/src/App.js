import { useState } from "react";
import "./App.css";

export const App = () => {
  // 未完了TODOを定義
  // TODOは複数作成できるようにするため、配列[]で定義
  const [incompleteTodos, setIncompleteTodos] = useState([
    "タスク1",
    "タスク2",
  ]);
  // 完了TODOを定義
  // TODOは複数作成できるようにするため、配列[]で定義
  const [completeTodos, setCompleteTodos] = useState(["タスク3"]);
  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {/* map関数でループ処理 */}
          {incompleteTodos.map((todo) => {
            return (
              // ループ内で返却している親タグにkey={引数名}を記述
              <div key={todo} className="list-row">
                {/* <li>{todo}</li>とすることで配列に格納されている要素を順番に表示 */}
                <li>{todo}</li>
                <button>完了</button>
                <button>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {/* map関数でループ処理 */}
          {completeTodos.map((todo) => {
            return (
              // ループ内で返却している親タグにkey={引数名}を記述
              <div key={todo} className="list-row">
                {/* <li>{todo}</li>とすることで配列に格納されている要素を順番に表示 */}
                <li>{todo}</li>
                <button>戻る</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
export default App;
