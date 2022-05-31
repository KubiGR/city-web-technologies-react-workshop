import { useState, useEffect } from "react";

function Clock() {
  const [date, setDate] = useState(new Date());
  let timerID;

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    timerID = setInterval(() => tick(), 1000);

    return () => {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }

  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
}

export default Clock;
