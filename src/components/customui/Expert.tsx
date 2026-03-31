"use client";

import { Button } from "../shadcnui/button";
import { SlidingNumber } from "./sliding-number";

const Expert = () => {
  return (
    <section>
      <div className="grid grid-cols-1 place-items-center p-10 text-5xl">
        <SlidingNumber number={0} />
      </div>
      <div className="grid w-full grid-cols-3 gap-1.5 p-2">
        <Button
          // disabled={count > 99}
          // onClick={plus}
          className="hover:bg-green-500 hover:text-white">
          +1
        </Button>
        <Button
          // onClick={reset}
          className="hover:bg-red-500 hover:text-white">
          Reset
        </Button>
        <Button
          // disabled={count > 99}
          // onClick={plsuTen}
          className="hover:bg-green-500 hover:text-white">
          +10
        </Button>
        <Button
          // disabled={count < -100}
          // onClick={minus}
          className="hover:bg-yellow-500 hover:text-white">
          -1
        </Button>
        <Button
          // onClick={random}
          className="hover:bg-red-500 hover:text-white">
          Random
        </Button>
        <Button
          // disabled={count < -100}
          // onClick={minusTen}
          className="hover:bg-yellow-500 hover:text-white">
          -10
        </Button>
      </div>
    </section>
  );
};

export default Expert;
