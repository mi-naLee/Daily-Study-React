/*
    @date : 04JUL23
    @content : '벨로퍼트와 함께하는 모던 리액트'
    @order : 1
*/
import React from "react";

function Wrapper({ children }) {
  const style = {
    border: "2px solid black",
    padding: "16px",
  };
  return <div style={style}>{children}</div>;
  {
    /* props.children을 이용해 Wrapper component 사이에 내용이 보여지게 만들기 */
  }
}

export default Wrapper;
