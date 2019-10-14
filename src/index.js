import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  const time = new Date().toLocaleTimeString();

  return (
    <div className="ui container">
      <div className="ui placeholder segment" style={{minHeight: '70px', padding: '20px 0 0 0', marginTop: '10px'}}>
        <div className="ui icon header">
          <i className="small stopwatch icon"></i>
          Current time
          <div>{time}</div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
