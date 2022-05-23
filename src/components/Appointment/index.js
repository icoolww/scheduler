import React from 'react'


import "components/Appointment/styles.scss";

import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import useVisualMode from 'hooks/useVisualMode';
import Form from './Form';




const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";



export default function Appointment (props) {
  console.log("props", props )

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );
  
  const onAdd = function () {
    transition(CREATE);
  }
  

  return (

    <article className="appointment">
        <Header time={props.time} />

        {mode === CREATE && <Form
          student={[]}
          interviewers={props.interviewers}
          cancel={() => back ()}
          onSave={[]}
          
          />}


        {props.interview &&
        <Show 
        student={props.interview.student}
        // interviewer={props.interview.interviewer}
        interviewer={props.interview.interviewer.name}
        />
        || <Empty onAdd={ onAdd }/>}



    </article >
  

  )
}


