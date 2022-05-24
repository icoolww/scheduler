import { useState, useEffect } from "react";
import axios from "axios";

// The state object will maintain the same structure.
// The setDay action can be used to set the current day.
// The bookInterview action makes an HTTP request and updates the local state.
// The cancelInterview action makes an HTTP request and updates the local state.

export const useApplicationData = () => {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  useEffect(() => {
    Promise.all([
      axios.get(`api/days`),
      axios.get(`api/appointments`),
      axios.get(`api/interviewers`),
    ]).then((all) => {
      // console.log("all", all)
      // console.log("all[0].data", all[0].data); // days
      // console.log("all[1].data", all[1].data); // appointments
      // console.log("all[2].data", all[2].data); // interviewers
      setState((prev) => ({
        ...prev, 
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data,
      }));
    });
  }, []);

  const setDay = (day) => setState({ ...state, day });

  function bookInterview(id, interview) {
    // console.log("id, interview", id, interview);

    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    return axios.put(`api/appointments/${id}`, { interview }).then((res) => {
      setState({
        ...state,
        appointments,
      });
    });
  }

  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null,
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    return axios.delete(`api/appointments/${id}`).then((res) => {
      setState({
        ...state,
        appointments,
      });
    });
  }

  
//   return { setDay, state, bookInterview, cancelInterview, spots };
// };



// updating remaining spots
const countSpots = (state) => {
  const currentDay = state.days.find((day) => day.name === state.day);
  // 
  const appointmentIds = currentDay.appointments;

  const spots = appointmentIds.filter((id) => !state.appointments[id]).length;
  // iterating over appoinmentIds, skip where interview isn't null

  return spots;
  }

  const updateSpots = (state) => {
    const updatedState = {...state};
    const updatedDays = [...state.days];
    const updatedDay = {...state.days.find((day) => day.name === state.day)};

    const spots = countSpots(state);
    updatedDays.spots = spots;

    const updatedDayIndex = state.days.findIndex(day => day.name === state.day);
    updatedDays[updatedDayIndex] = updatedDay;

    updatedState.days = updatedDays;

    return updatedState;

  }

  return { setDay, state, bookInterview, cancelInterview };
};