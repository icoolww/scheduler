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
  // console.log("props", props )

  const interviewer = props.interviewers.find((interviewer) => props.interview && interviewer.id === props.interview.interviewer);
  // finding the id and then matching it

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );
  
  const onAdd = function () {
    transition(CREATE);
  }

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    props.bookInterview (props.id, interview)
    transition(SHOW);


    // console.log("props.id", props.id)
    // console.group("interview", interview)
  }

  console.log('test interviewer name', props.interview);
  

  return (

    <article className="appointment">
        <Header time={props.time} />

        {mode === CREATE && <Form
          student={[]}
          interviewers={props.interviewers}
          cancel={() => back ()}
          onSave={save}
          
          />}


        {props.interview &&
        <Show 
        student={props.interview.student}
        // interviewer={props.interview.interviewer}
        interviewer={interviewer.name || null}
        />
        || <Empty onAdd={ onAdd }/>}



    </article >
  

  )
}


