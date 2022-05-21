import { useState } from "react";


export default function useVisualMode (initial) {

  // const [mode, setMode] = useState (initial);
  const [history, setHistory] = useState([initial]);


 function transition (newMode, replace = false) {
   const newHistory = replace ? history.slice(0, -1) : history;
    // replacing current mode in history
    setHistory ([...newHistory, newMode]);

    // setMode(newMode)

 }


  function back () {
    if (history.length > 1) {
      setHistory([...history.slice(0, -1)]);
    }
  }
  // array will always need to have a length that is greater than or equal to 1.
  // should not allow the user to go back past the initial mode

  const mode = history.slice(-1)[0];
  // grab the last item in the array and make it the last item in the stack
  return { mode, transition, back };

};