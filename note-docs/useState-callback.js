import React from "react";
import "./styles.css";

export default function App() {
  const callbackRef = React.useRef(() => alert("init"));
  const callback = callbackRef.current;
  console.log(callback);
  return (
    <div className="App">
      <button onClick={() => (callbackRef.current = () => alert("updated"))}>
        setCallback
      </button>
      <button onClick={callback}>call callback</button>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
