import React, { useState } from "react";

const Mobile = () => {
  const [battery, setBattery] = useState(100);
  const decrease = () => {
    if (battery > 0) {
      let newBattery = battery - 10;
      setBattery(newBattery);
    }
  };
  return (
    <div>
      <h1>{battery}%</h1>
      <button onClick={decrease}>Battery Down</button>
    </div>
  );
};

export default Mobile;
