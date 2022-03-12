import React, { useEffect, useState } from "react";

const BasicUseEffect = () => {
  // Stateが更新されるたびにレンダリングが発生する
  const [count, setCount] = useState(0);
  const [item, setItem] = useState("");

  // useEffectはレンダリングに応じて実行される
  useEffect(() => {
    console.log("useEffect invoked");
  }, []);

  // Stateが更新された時に実行される
  useEffect(() => {
    console.log("change count");
  }, [count]);

  useEffect(() => {
    console.log("change item");
  }, [item]);

  return (
    <div>
      <button onClick={() => setCount((prCount) => prCount + 1)}>
        Click {count}
      </button>
      <input
        type="text"
        value={item}
        onChange={(evt) => setItem(evt.target.value)}
      />
    </div>
  );
};

export default BasicUseEffect;
