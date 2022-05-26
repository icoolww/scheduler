export function getAppointmentsForDay(state, day) {
  //... returns an array of appointments for that day

  // 1
  const dayObject = state.days.find(({ name }) => name === day);

  // 3
  if (dayObject === undefined) {
    return [];
  }

  // 2
  const resultArray = dayObject.appointments.map(
    (appointment) => state.appointments[appointment]
  );

  return resultArray;
}

export function getInterview(state, interview) {
  if (interview) {
    let newInterview = { ...interview };

    let interviewerId = newInterview.interviewer;

    let interviewer = state.interviewers[interviewerId];
    // equals id. name, avatar of interviewer

    newInterview.interviewer = interviewer;

    return newInterview;
  }

  return null;
}

export function getInterviewersForDay(state, day) {
  //... returns an array of interviewer for that day

  // 1
  const intObject = state.days.find(({ name }) => name === day);

  // 3
  if (intObject === undefined) {
    return [];
  }

  // 2
  const resultArray = intObject.interviewers.map(
    (interviewer) => state.interviewers[interviewer]
  );
  // const resultArray =
  //   intObject.appointments.map (() => state.interviewers )

  return resultArray;
}

// 1. finding the object in state.days array who's name matches the provided day.
// 2. Once we have access to the appointment array, iterating through it, comparing where it's id matches the id of states.appointments and return that value.
// 3. if there are no appointments on the given day, days data will be empty, should return an empty array.
