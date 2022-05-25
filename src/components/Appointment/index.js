import React from "react";

import "components/Appointment/styles.scss";

import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import useVisualMode from "hooks/useVisualMode";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";
import Error from "./Error";

const EMPTY = "EMPTY";
const CREATE = "CREATE";
const SAVING = "SAVING";
const SHOW = "SHOW";
const CONFIRM = "CONFIRM";
const DELETING = "DELETING";
const EDIT = "EDIT";
const ERROR_SAVE = "ERROR_SAVE";
const ERROR_DELETE = "ERROR_DELETE";

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
    console.log('test', name, interviewer)
    const interview = {
      student: name,
      interviewer: interviewer.id,
    };
    transition(SAVING, true);
    props
      .bookInterview(props.id, interview)
      .then(() => {
        transition(SHOW);
      })
      .catch((err) => transition(ERROR_SAVE, true));
  }

  function deleteInterview() {
    transition(DELETING, true);
    props
      .cancelInterview(props.id)
      .then(() => {
        transition(EMPTY);
      })
      .catch((err) => transition(ERROR_DELETE, true));
  }

  function onEdit() {
    transition(EDIT);
  }

  // console.log("test interviewer name", props.interview);

  return (
    <article className="appointment">
      <Header time={props.time} />

      {mode === EMPTY && <Empty onAdd={onAdd} />}

      {mode === CREATE && (
        <Form
          interviewers={props.interviewers}
          onCancel={() => back()}
          // onSave={() => save()}
          onSave={save}
        />
      )}

      {mode === SAVING && <Status message={mode} />}

      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={interviewer ? interviewer.name : ''}
          onDelete={() => {
            transition(CONFIRM);
          }}
          onEdit={() => onEdit()}
        />
      )}

      {mode === CONFIRM && (
        <Confirm
          message="Delete the appointment?"
          onConfirm={() => {
            deleteInterview();
          }}
          onCancel={() => back()}
        />
      )}

      {mode === DELETING && <Status message={mode} />}

      {mode === EDIT && (
        <Form
          name={props.interview.student}
          interviewers={props.interviewers}
          interviewer={interviewer}
          onCancel={() => back()}
          // onSave={() => save()}
          onSave={save}
        />
      )}

      {mode === ERROR_DELETE && (
        <Error message="Could not delete appointment" onClose={() => back()} />
      )}

      {mode === ERROR_SAVE && (
        <Error message="Could not save appointment" onClose={() => back()} />
      )}
    </article>
  );
}
