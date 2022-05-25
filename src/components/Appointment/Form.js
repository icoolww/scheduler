import React, { useState } from 'react';

// import "components/Appointment/styles.scss";

import Button from "components/Button";
import InterviewerList from "components/InterviewerList";
import { getInterviewersForDay } from 'helpers/selectors';

export default function Form (props) {

  // console.log("props", props)

  const [student, setStudent] = useState(props.name || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  // console.log("props interviewer", props.interviewers);

  const [error, setError] = useState("");


  function validate() {
    if (student === "") {
      setError("Student name cannot be blank");
      return;
    }
    // if (interviewer === null) {
    //   setError("Please select an interviewer");
    //   return;
    // }

    setError("");
    props.onSave(student, interviewer);
    // props.onSave(student, interviewer.id);
  }


  const reset = () => {
    setStudent("");
    setInterviewer(null);
  }

  const cancel = () => {
    reset();
    props.onCancel();
  }


  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={event => event.preventDefault()}>
            <input
              className="appointment__create-input text--semi-bold"
              name="name"
              type="text"
              placeholder="Enter Student Name"
              value={student}
              onChange={(event) => setStudent(event.target.value)}
              data-testid="student-name-input"
              
              /*
              This must be a controlled component
              your code goes here
              */
            />
          </form>

          <section className="appointment__validation">{error}</section>

            <InterviewerList 
              interviewers={props.interviewers}
              // interviewers={interviewers}
              // onChange={(event) => setInterviewer(event.target.value)}
              onChange={setInterviewer}
              value={interviewer}
            
            />
            </section>
            <section className="appointment__card-right">
            <section className="appointment__actions">
            <Button danger onClick={cancel}>Cancel</Button>


            <Button confirm onClick={validate}>Save</Button>
          </section>
      </section>
    </main>
  
    )
  }
