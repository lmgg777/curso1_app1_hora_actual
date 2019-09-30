import React from "react";
import ReactDOM from "react-dom";

const styleFont = { fontFamily: "Arial" };

function getTime() {
  return new Date().toLocaleTimeString();
}

const App = () => {
  return (
    <div style={styleFont}>
      <h1>Current time: </h1>
      {getTime()}
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
