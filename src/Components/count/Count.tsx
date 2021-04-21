import React, { useState, useEffect } from "react";
import countdown from "../../tools/countdown";

const Count = () => {
  interface CountingData {
    seconds: number;
  }

  const [counter, setCounter] = useState<number>(60);

  useEffect(() => {
    //ts-nocheck
    const timer: any | ReturnType<typeof setTimeout> =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);
  return (
    <div>
      We're launching soon
      <div
        className="numbers"
        id="countdown"
        data-time="2021-04-21T08:33:37+0000"
      >
        <div className="days">Days</div>
        <div className="hours">Hours</div>
        <div className="minutes">Minutes</div>
        <div className="seconds">{counter}</div>
      </div>
    </div>
  );
};

export default Count;
