import React from "react";


export default function Empty (props) {


  return (
    <main className="appointment__empty">
    <img
      className="appointment__empty-button"
      src="images/add.png"
      alt="Add"
      onClick={props.onAdd}
    />
    </main>
  )
}