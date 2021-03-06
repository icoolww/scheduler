import React from "react";

import "components/Application.scss";

import DayList from "./DayList";
import Appointment from "./Appointment";
import {
  getAppointmentsForDay,
  getInterviewersForDay,
} from "helpers/selectors";
import { useApplicationData } from "hooks/useApplicationData";

export default function Application(props) {
  const { state, setDay, bookInterview, cancelInterview } =
    useApplicationData();

  const dailyAppointments = getAppointmentsForDay(state, state.day);
  const dailyInterviewers = getInterviewersForDay(state, state.day);

  const arrayComponents = Object.values(dailyAppointments).map(
    (appointment) => {
      return (
        <Appointment
          key={appointment.id}
          interviewers={dailyInterviewers}
          bookInterview={bookInterview}
          cancelInterview={cancelInterview}
          id={appointment.id}
          time={appointment.time}
          interview={appointment.interview}
          // {...appointment}
          // // is equal to 3 codes above
        />
      );
    }
  ); 

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList days={state.days} day={state.day} setDay={setDay} />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {arrayComponents}

        <Appointment
          interviewers={dailyInterviewers}
          key="last"
          time="5pm" />
      </section>
    </main>
  );
}
