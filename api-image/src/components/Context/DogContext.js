// 各コンポーネントに犬の情報を共有するコンポーネント
import React, { createContext, useState } from "react";

export const DogContext = createContext();
// お気に入りした犬の情報を他のコンポーネントに渡すためコンテキストの作成
export const DogProvider = ({ children }) => {
  const [dogDataList, setDogDataList] = useState([]);

  return (
    // 子コンポーネにstateを渡せるようにしてある
    <DogContext.Provider value={{ dogDataList, setDogDataList }}>
      {children}
    </DogContext.Provider>
  );
};
