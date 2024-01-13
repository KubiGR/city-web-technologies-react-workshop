import { useState, useEffect, useRef } from "react";

function Clock() {
  const [date, setDate] = useState(new Date());
  const timerIDRef = useRef();

  useEffect(() => {
    function tick() {
      setDate(new Date());
    }

    timerIDRef.current = setInterval(() => tick(), 1000);

    return () => {
      clearInterval(timerIDRef.current);
    };
  });

  return (
    <div>
      <h2>It's {date.toLocaleTimeString()}.</h2>
    </div>
  );
}

export default Clock;
