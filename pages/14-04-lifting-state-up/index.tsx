import Child1 from "@/src/components/units/14-lifting-state-up/Child1";
import Child2 from "@/src/components/units/14-lifting-state-up/Child2";
import { useState } from "react";

const LiftingStateUpPage = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <Child1 count={count} setCount={setCount} />
      <div>===============================</div>
      <Child2 count={count} setCount={setCount} />
    </>
  );
};

export default LiftingStateUpPage;
