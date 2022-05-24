import React, { useState } from 'react';

// import "components/Appointment/styles.scss";

import Button from "components/Button";
import InterviewerList from "components/InterviewerList";
import { getInterviewersForDay } from 'helpers/selectors';

export default function Form (props) {

  // console.log("props", props)

  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewers || null);
  // console.log("props interviewer", props.interviewers);



  const reset = () => {
    setStudent("");
    setInterviewer(null);
  }

  const cancel = () => {
    reset();
    props.cancel();
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
              /*
              This must be a controlled component
              your code goes here
              */
            />
          </form>
            <InterviewerList 
              interviewers={props.interviewers}
              // interviewers={interviewer}
              // onChange={(event) => setInterviewer(event.target.value)}
              onChange={setInterviewer}
              value={interviewer}
            
            />
            </section>
            <section className="appointment__card-right">
            <section className="appointment__actions">
            <Button danger onClick={cancel}>Cancel</Button>


            <Button confirm onClick={() => props.onSave(student, interviewer)}>Save</Button>
          </section>
      </section>
    </main>
  
    )
  }
  