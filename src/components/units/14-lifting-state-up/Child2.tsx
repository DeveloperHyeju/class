const Child2 = ({ count, setCount }: any) => {
  const onClickCountUp = () => {
    setCount((prev: number) => prev + 1);
  };
  return (
    <>
      <div>자식 2의 count: {count}</div>
      <button onClick={onClickCountUp}>count 올리기</button>
    </>
  );
};

export default Child2;
