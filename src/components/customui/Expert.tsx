"use client";

import { initValue, mainValue } from "@/lib/atom";
import { useAtom } from "jotai";
import { useState } from "react";
import { toast } from "react-toastify";
import { Button } from "../shadcnui/button";
import { SlidingNumber } from "./sliding-number";

const Expert = () => {
  const [count, setCount] = useAtom(mainValue);
  const [loading, Setloading] = useState(false);

  const plusTen = async () => {
    for (let i = 0; i < 10; i++) {
      await new Promise((r) => setTimeout(r, 100));
      setCount((count) => count + 1);
    }
  };

  const plus = () => {
    setCount(count + 1);
  };
  const minus = () => {
    setCount(count - 1);
  };

  const randomNumber = async () => {
    if (loading) {
    } else {
      Setloading(true);
      toast.warning("Please Wait");
      const max = 100;
      const min = -100;
      const total = Math.random() * (min - max) + max;
      for (let i = count; i < total; i++) {
        await new Promise((r) => setTimeout(r, 50));
        setCount((count) => count + 1);
      }
      for (let i = count; i > total; i--) {
        await new Promise((r) => setTimeout(r, 50));
        setCount((count) => count - 1);
      }
      Setloading(false);
    }
  };

  const minusTen = async () => {
    for (let i = 0; i < 10; i++) {
      await new Promise((r) => setTimeout(r, 100));
      setCount((count) => count - 1);
    }
  };
  const reset = async () => {
    toast.success(`Reset Done`);

    setCount(initValue);
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
          disabled={loading}
          onClick={reset}
          className="hover:bg-red-500 hover:text-white">
          Reset
        </Button>
        <Button
          // disabled={count > 99}
          onClick={plusTen}
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
          disabled={loading}
          onClick={randomNumber}
          className="hover:bg-red-500 hover:text-white">
          Random
        </Button>
        <Button
          // disabled={count < -100}
          onClick={minusTen}
          className="hover:bg-yellow-500 hover:text-white">
          -10
        </Button>
      </div>
    </section>
  );
};

export default Expert;
