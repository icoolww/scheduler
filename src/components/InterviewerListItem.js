import React from "react";

import "components/InterviewerListItem.scss";
import classNames from "classnames";



export default function InterviewerListItem (props) {

  console.log("props", props)

  const interviewerClass = classNames("interviewers__item", {
    "interviewers__item--selected": props.selected
  });


  return (

    // // {before refactoring}
    // <li className={interviewerClass} onClick={() => props.setInterviewer(props.id)}>

    // after refactoring
  <li className={interviewerClass} onClick={props.setInterviewer}>
  <img
    className="interviewers__item-image"
    src={props.avatar}
    alt={props.name}
  />
  {props.selected && props.name} 
  {/* {show the name if selected} */}
</li>
  )
}