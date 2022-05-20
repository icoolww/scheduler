


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


// 1. We need to start by finding the object in our state.days array who's name matches the provided day. With this information we can now access that specific days appointment array.
// 2. Once we have access to the appointment array for the given day, we'll need to iterate through it, comparing where it's id matches the id of states.appointments and return that value.
// 3. We should also probably do a bit of validation. If there are no appointments on the given day, our days data will be empty. According to our tests, in a case like this, we should return an empty array.
