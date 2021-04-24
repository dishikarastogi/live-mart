import React from "react";
export default function ItemList(props) {
  console.log(props.list);
  return props.list.map((item) => <div key={item.id}> {item.id} {item.name}</div>);
}
