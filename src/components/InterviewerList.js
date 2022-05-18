import React from "react";

import "components/InterviewerList.scss";
import InterviewerListItem from "./InterviewerListItem";


export default function InterviewerList (props) {
  console.log("props", props)
  const interviewerList = props.interviewers.map ((interviewer) => {
    // console.log("interviewer", interviewer)

    // const compare = function () {
    //   if (props.interviewer === interviewer.id) {
    //     // props.interviewer is interviewer :3
    //     // interviewer.id is from map function above
    //     return true;
    //   }
    // }

    return (
      <InterviewerListItem 
        id={interviewer.id}
        key={interviewer.id}
        name={interviewer.name}
        avatar={interviewer.avatar}
        selected={props.interviewer === interviewer.id}
        setInterviewer={props.setInterviewer}
       
      />
    )
  })




  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{interviewerList}</ul>
    </section>
  )
}