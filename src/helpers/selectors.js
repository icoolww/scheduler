


export function getAppointmentsForDay(state, day) {
  //... returns an array of appointments for that day

  // 1
const dayObject = state.days.find( ({ name }) =>  name === day)
// console.log("dayObject", dayObject)

// 3
if (dayObject === undefined) {
  return [];
}

// 2
const resultArray = dayObject.appointments.map ((appointment) => state.appointments[appointment] )
// console.log("resultArray", resultArray)

return resultArray;
}  

// 1. We need to start by finding the object in our state.days array who's name matches the provided day.
//      With this information we can now access that specific days appointment array.
// 2. Once we have access to the appointment array for the given day, we'll need to iterate through it,
//      comparing where it's id matches the id of states.appointments and return that value.
// 3. We should also probably do a bit of validation. If there are no appointments on the given day,
//      our days data will be empty. According to our tests, in a case like this, we should return an empty array.


export function getInterview(state, interview) {
  // console.log(interview);
  if (interview) {
    // console.log("interview", interview) this equals to {student: 'Archie Cohen', interviewer: 2}
    let newInterview = {...interview};
    // console.log("state", state)
    // console.log("newInterview", newInterview) equals to {student: 'Archie Cohen', interviewer: 2}

    let interviewerId = newInterview.interviewer;
    // console.log("Id", InterviewId) got id 2
    // console.log("state", state)

    let interviewer = state.interviewers[interviewerId];
    // console.log("interviewer", interviewer) 
    // equals id. name, avatar of interviewer

    // works !
    newInterview.interviewer = interviewer;

    // not working!
    // interviewerId = interviewer;
    // interviewer = newInterview.interviewer

    // console.log("interview", interview)
    
    return newInterview;
  }
  
  return null;
}

// The function should return a new object containing the interview data when we pass it an object 
// that contains the interviewer.
// Otherwise, the function should return null.


export function getInterviewersForDay(state, day) {
  //... returns an array of interviewer for that day
  console.log("state", state)

  // 1
const intObject = state.days.find( ({ name }) =>  name === day)
console.log("intObject", intObject)

// 3
if (intObject === undefined) {
  return [];
}

// 2
const resultArray = intObject.interviewers.map ((interviewer) => state.interviewers[interviewer] )
// const resultArray =
//   intObject.appointments.map (() => state.interviewers )
console.log("resultArray", resultArray)

return resultArray;
} 