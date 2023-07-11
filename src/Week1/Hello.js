/*
    @date : 03JUL23
    @content : '벨로퍼트와 함께하는 모던 리액트'
    @order : 1
*/
import React from "react";

Hello.defaultProps = {
  name: "이름없음",
};

// 함수형 컴포넌트
function Hello(props) {
  return <div style={{ color: props.color }}>안녕 {props.name}</div>;
  // XML 형식 값 반환 == JSX
}

export default Hello; // for using another components
