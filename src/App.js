/*
    @date : 03JUL23
    @content : '벨로퍼트와 함께하는 모던 리액트'
    @order : 2
*/
import React from "react";
import Hello from "./Hello";

function App() {
  return (
    <div>
      <Hello />
      <Hello />
      {/* Component 재사용 가능 */}
    </div>
  );
}

export default App;
