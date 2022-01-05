import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  // React.StrictMode 可以给出整个里面不建议使用的api的提示，比如字符串形式的ref
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

