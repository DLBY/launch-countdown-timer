/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from "react";

const Count = () => {
  const flip = () => {};

  // interface CountingData {
  //   seconds: number;
  // }

  const [seconds, setSeconds] = useState<number>(60);
  const [minutes, setMinutes] = useState<number>(60);
  const [hours, setHours] = useState<number>(60 * minutes);
  const [days, setDays] = useState<number>(24 * hours);

  const launchDate = Date.parse("2021-04-29T08:33:37+0000") / 1000;
  const difference = launchDate - Date.now() / 1000;
  const timeDiff = {
    days: Math.floor(difference / days),
    hours: Math.floor((difference % days) / hours),
    minutes: Math.floor((difference % hours) / minutes),
    seconds: Math.floor(difference % minutes),
  };

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
    <>
      <div className="top">We're launching soon</div>
      <div className="numbers_container">
        <div className="card">
          <div className="card_numbers">
            <div className="dot left"></div>
            <div className="line"></div>
            {daysLeft >= 0 && daysLeft < 10 ? `0${daysLeft}` : daysLeft}
            <div className="dot right"></div>
          </div>
          <div className="card_text">days</div>
        </div>

        <div className="card">
          <div className="card_numbers">
            <div className="dot left"></div>
            <div className="line"></div>
            {hoursLeft >= 0 && hoursLeft < 10 ? `0${hoursLeft}` : hoursLeft}
            <div className="dot right"></div>
          </div>
          <div className="card_text">hours</div>
        </div>

        <div className="card">
          <div className="card_numbers">
            <div className="dot left"></div>
            <div className="line"></div>
            {minutesLeft >= 0 && minutesLeft < 10
              ? `0${minutesLeft}`
              : minutesLeft}
            <div className="dot right"></div>
          </div>
          <div className="card_text">minutes</div>
        </div>

        <div className="card">
          <div className="card_numbers">
            <div className="dot left"></div>
            <div className="line"></div>
            <div className="top_number">
              {secondsLeft >= 0 && secondsLeft < 10
                ? `0${secondsLeft}`
                : secondsLeft}
            </div>
            <div className="bot_number">
              {secondsLeft >= 0 && secondsLeft < 10
                ? `0${secondsLeft}`
                : secondsLeft}
            </div>
            <div className="persistent_number">
              {secondsLeft >= 0 && secondsLeft < 10
                ? `0${secondsLeft}`
                : secondsLeft}
            </div>
            <div className="dot right"></div>
          </div>
          <div className="card_text">seconds</div>
        </div>
      </div>
    </>
  );
};

export default Count;
