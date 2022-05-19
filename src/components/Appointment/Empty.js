import React from "react";

// import "components/Appointment/styles.scss";

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