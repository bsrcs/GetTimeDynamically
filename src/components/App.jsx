import React, {useState} from "react";

function App() {

  //get current time
  const now = new Date().toLocaleTimeString('it-IT');
  const [currentTime, setTime] = useState(now);

  // get code to be called every second
  setInterval(getTime, 1000);

  function getTime(){
    const newTime = new Date().toLocaleTimeString('it-IT');
    setTime(newTime);
  }

  // show the latest time in <h1> when the getTme button is pressed.
  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
