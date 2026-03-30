"use client";

import { Button } from "../shadcnui/button";

const Counter = () => {
  return (
    <section>
      <div className="grid grid-cols-1 place-items-center p-10 text-5xl">
        0.00
      </div>
      <div className="grid w-full grid-cols-3 gap-1.5 p-2">
        <Button className="hover:bg-yellow-500 hover:text-white">-1</Button>
        <Button className="hover:bg-red-500 hover:text-white">Reset</Button>
        <Button className="hover:bg-green-500 hover:text-white">+1</Button>
      </div>
    </section>
  );
};

export default Counter;
