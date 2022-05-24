import React from "react";

import "components/Appointment/styles.scss";

import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import useVisualMode from "hooks/useVisualMode";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";

const EMPTY = "EMPTY";
const CREATE = "CREATE";
const SAVING = "SAVING";
const SHOW = "SHOW";
const CONFIRM = "CONFIRM";
const DELETING = "DELETING";


export default function Appointment(props) {
  // console.log("props", props )

  const interviewer = props.interviewers.find(
    (interviewer) =>
      props.interview && interviewer.id === props.interview.interviewer
  );
  // finding the id and then matching it

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  const onAdd = function () {
    transition(CREATE);
  };

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer,
    };
    transition(SAVING);
    props.bookInterview(props.id, interview).then(()=>{
      transition(SHOW)
    })
  }

  function deleteInterview() {
        transition(DELETING)
      props.cancelInterview(props.id).then(()=>{
        transition(EMPTY)
      })
  }

  // console.log("test interviewer name", props.interview);

  return (
    <article className="appointment">
      <Header time={props.time} />

      {mode === EMPTY && <Empty onAdd={onAdd} />}

      {mode === CREATE && (
        <Form
          student={[]}
          interviewers={props.interviewers}
          cancel={() => back()}
          onSave={save}
        />
      )}

      {mode === SAVING && (
        <Status message={mode} />
      )}

      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onDelete={()=>{transition(CONFIRM)}}
        />
      )}

      {mode === CONFIRM && <Confirm
          message="Delete the appointment?" 
          onConfirm={()=>{deleteInterview()}}
          onCancel={() => back()} />}

      {mode === DELETING && <Status message={mode} />}

      
    </article>
  );
}
