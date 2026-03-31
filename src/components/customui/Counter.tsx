"use client";

import { useState } from "react";
import { SlidingNumber } from "../customui/sliding-number";
import { Button } from "../shadcnui/button";

const Counter = () => {
  const [count, setCount] = useState(0);
  const plus = () => {
    setCount(count + 1);
  };
  const minus = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <section>
      <div className="grid grid-cols-1 place-items-center p-10 text-5xl">
        <SlidingNumber number={count} />
      </div>
      <div className="grid w-full grid-cols-3 gap-1.5 p-2">
        <Button
          onClick={minus}
          className="hover:bg-yellow-500 hover:text-white">
          -1
        </Button>
        <Button
          onClick={reset}
          className="hover:bg-red-500 hover:text-white">
          Reset
        </Button>
        <Button
          onClick={plus}
          className="hover:bg-green-500 hover:text-white">
          +1
        </Button>
      </div>
    </section>
  );
};

export default Counter;
