const Child1 = ({ count, setCount }: any) => {
  const onClickCountUp = () => {
    setCount((prev: number) => prev + 1);
  };

  return (
    <>
      <div>자식 1의 count: {count}</div>
      <button onClick={onClickCountUp}>count 올리기</button>
    </>
  );
};

export default Child1;
