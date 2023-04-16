import { useState } from "react";

const CounterStatePage = () => {
  const [count, setCount] = useState(0);

  const onClickCountUp = () => {
    setCount((prevState) => prevState + 1);
    setCount((prevState) => prevState + 1);
    setCount((prevState) => prevState + 1);
    setCount((prevState) => prevState + 1);
  };

  const onClickCountDown = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <div>{count}</div>
      <button onClick={onClickCountUp}>카운트 +1</button>
      <button onClick={onClickCountDown}>카운트 -1</button>
    </div>
  );
};

export default CounterStatePage;
