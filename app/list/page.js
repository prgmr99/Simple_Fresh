"use client";
import { useState } from "react";
export default function List() {
  let 상품 = ["tomatoes", "pasta", "coconut"];
  let [수량, 수량변경] = useState([0, 0, 0]); // client component 안에서만 사용할 수 있다.
  console.log(상품);
  return (
    <div>
      <h4 className="title">상품목록</h4>
      {상품.map((elem, i) => {
        return (
          <div className="food" key={i}>
            <img src={`food${i}.png`} className="food-img" />
            <h4>{elem} $40</h4>
            <button
              onClick={() => {
                let copy = [...수량];
                copy[i]--;
                수량변경(copy);
              }}
            >
              -
            </button>
            <span> {수량[i]} </span>
            <button
              onClick={() => {
                let copy = [...수량];
                copy[i]++;
                수량변경(copy);
              }}
            >
              +
            </button>
          </div>
        );
      })}
    </div>
  );
}

// 수량변경 구현할 때, 새 state와 기존 state이 같은 경우에는 useState 내부적으로 변경하지 않음.
// 그래서 state을 복사하여 적용함.
