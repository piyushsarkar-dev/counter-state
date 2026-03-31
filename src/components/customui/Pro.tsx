"use client";

import { useState } from "react";
import { Button } from "../shadcnui/button";
import { SlidingNumber } from "./sliding-number";

const Pro = () => {
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
  const plsuTen = () => {
    setCount(count + 10);
  };
  const minusTen = () => {
    setCount(count - 10);
  };
  const random = () => {
    const max = 100;
    const min = -100;
    setCount(Math.random() * (min - max) + max);
  };
  return (
    <section>
      <div className="grid grid-cols-1 place-items-center p-10 text-5xl">
        <SlidingNumber number={count} />
      </div>
      <div className="grid w-full grid-cols-3 gap-1.5 p-2">
        <Button
          disabled={count > 99}
          onClick={plus}
          className="hover:bg-green-500 hover:text-white">
          +1
        </Button>
        <Button
          onClick={reset}
          className="hover:bg-red-500 hover:text-white">
          Reset
        </Button>
        <Button
          disabled={count > 99}
          onClick={plsuTen}
          className="hover:bg-green-500 hover:text-white">
          +10
        </Button>
        <Button
          disabled={count < -100}
          onClick={minus}
          className="hover:bg-yellow-500 hover:text-white">
          -1
        </Button>
        <Button
          onClick={random}
          className="hover:bg-red-500 hover:text-white">
          Random
        </Button>
        <Button
          disabled={count < -100}
          onClick={minusTen}
          className="hover:bg-yellow-500 hover:text-white">
          -10
        </Button>
      </div>
    </section>
  );
};

export default Pro;
