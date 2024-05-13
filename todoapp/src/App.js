import { useState } from "react";
import "./App.css";

export const App = () => {
  //   TODO入力欄の値を取得するため、入力部分をstateとして定義
  const [todoText, setTodoText] = useState("");
  // 未完了TODOを定義
  // TODOは複数作成できるようにするため、配列[]で定義
  const [incompleteTodos, setIncompleteTodos] = useState([
    "タスク1",
    "タスク2",
  ]);
  // 完了TODOを定義
  // TODOは複数作成できるようにするため、配列[]で定義
  const [completeTodos, setCompleteTodos] = useState(["タスク3"]);
  // 関数の引数(event)には、入力された情報が格納されており、event.target.valueとすることで入力された値を取得できる
  // 取得した値をsetTodoTextの引数に渡すことで、todoTextのstateに反映させている。
  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    // if文で入力欄が空の場合、処理を実行しないよう制御している。
    if (todoText === "") return;
    // newTodos変数には、今現在表示されているタスクと新たに追加したタスクを結合した新たな配列が格納されている
    // スプレッド構文(...)を使用して今現在表示されているタスクを格納
    // todoTextには、新たに追加したタスクが格納されている。
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    // setTodoText("");とすることで、追加後に入力欄をリセットしている。
    setTodoText("");
  };
  return (
    <>
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          // inputのvalue属性に{todoText}を設定することで、入力された値が表示されるようにしている
          value={todoText}
          // onChangeイベントを使用して入力された値を取得し、入力欄に反映させる処理を関数に定義
          onChange={onChangeTodoText}
        />
        {/* onClickイベントを使用し、追加ボタン押下後の処理を定義した関数を設定 */}
        <button onClick={onClickAdd}>追加</button>
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
