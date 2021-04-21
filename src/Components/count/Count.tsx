import React, { useState, useEffect } from "react";
import countdown from "../../tools/countdown";

const Count = () => {
  interface CountingData {
    seconds: number;
  }

  const [seconds, setSeconds] = useState<number>(60);
  const [minutes, setMinutes] = useState<number>(60);
  const [hours, setHours] = useState<number>(60 * minutes);
  const [days, setDays] = useState<number>(24 * hours);

  const launchDate = Date.parse("2021-04-28T08:33:37+0000") / 1000;
  const difference = launchDate - Date.now() / 1000;
  const timeDiff = {
    days: Math.floor(difference / days),
    hours: Math.floor((difference % days) / hours),
    minutes: Math.floor((difference % hours) / minutes),
    seconds: Math.floor(difference % minutes),
  };
  console.log("timeDiff:", timeDiff);

  const [secondsLeft, setSecondsLeft] = useState<number>(timeDiff.seconds);
  const [minutesLeft, setMinutesLeft] = useState<number>(timeDiff.minutes);
  const [hoursLeft, setHoursLeft] = useState<number>(timeDiff.hours);
  const [daysLeft, setDaysLeft] = useState<number>(timeDiff.days);

  useEffect(() => {
    const timer: any | ReturnType<typeof setTimeout> = setInterval(() => {
      if (secondsLeft > 0) {
        setSecondsLeft(secondsLeft - 1);
      }
      if (secondsLeft === 0) {
        if (minutesLeft === 0) {
          clearInterval(timer);
        } else {
          setMinutesLeft(minutesLeft - 1);
          setSecondsLeft(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  });
  return (
    <div>
      We're launching soon
      <div className="numbers">
        <div className="days">{daysLeft}</div>
        <div className="hours">{hoursLeft}</div>
        <div className="minutes">{minutesLeft}</div>
        <div className="seconds">{secondsLeft}</div>
      </div>
    </div>
  );
};

export default Count;