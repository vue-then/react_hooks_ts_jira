import React from "react";
import "./styles.css";

export default function App() {
  const [callback, setCallback] = React.useState(() => ()=> {
      alert('init')
  })
  console.log(callback);
  return (
    <div className="App">
      <button onClick={() => setCallback(() => () => alert("updated lazy callback!"))}>
        setCallback
      </button>
      <button onClick={callback}>call callback</button>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
  