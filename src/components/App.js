import React from "react";
import "./../styles/App.css";

const App = () => {
  const [count, setCount] = React.useState(0);
  const increment = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <>
      <p>Button Clicked {count} times</p>
      <button onClick={increment}>Click Me</button>
    </>
  );
};

export default App;
