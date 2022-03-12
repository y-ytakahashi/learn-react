import React, { useState } from "react";

interface IProps {
  name: string;
}
const Basic1 = (props: IProps) => {
  const clickHandler = () => {
    console.log("clicked");
  };

  const [count, setCount] = useState(0);
  return (
    <>
      <button
        // この状態だとカウント１ずつ増える
        onClick={() => {
          setCount(count + 1);
          setCount(count + 1);
        }}
      >
        count {count}
      </button>
      <button
        // この状態だと２ずつ増える
        onClick={() => {
          setCount((prCount) => prCount + 1);
          setCount((prCount) => prCount + 1);
        }}
      >
        count {count}
      </button>

      <h1>Hello React {props.name}</h1>
    </>
  );
};

export default Basic1;
