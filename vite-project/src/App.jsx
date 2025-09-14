import React, { useState } from "react";
function App() {
  const [counter, setCounter] = useState(15);

  const addCounter = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };
  const removeCounter = () => {
    if(counter>0){
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <button onClick={addCounter}>Add {counter}</button>
      <button onClick={removeCounter}>Sub {counter}</button>
    </>
  );
}

export default App;
