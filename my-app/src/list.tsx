import React from "react";
import "./App.css";

type Data = { gender: string; age: number; name: string };

type P = {
  persons: Data[];
  gender: string;
  show: boolean;
};

export const List: React.FC<P> = p => {
  if (!p.show) {
    return null;
  }
  let age: number = 0;

  const list = p.persons
    .filter(i => i.gender === p.gender)
    .map((i, idx) => {
      age += i.age;
      return (
        <li key={idx}>
          {i.name} {i.age}
        </li>
      );
    });

  return (
    <ul className="list">
      {list}
      <span> averange age: {age / list.length}</span>
    </ul>
  );
};
