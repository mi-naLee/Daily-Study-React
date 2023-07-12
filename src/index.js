import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ArrAddRun from "./Run/ArrAddRun";

// ReactDOM : 실제 DOM 내부에 리액트 컴포넌트를 렌더링
const root = ReactDOM.createRoot(document.getElementById("root"));
// id == 'root'인 DOM은 public/index.html에 있다.
root.render(
  <React.StrictMode>
    {/*<App />*/}
    <ArrAddRun />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
