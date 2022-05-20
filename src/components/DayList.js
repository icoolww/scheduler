import React from "react";

import DayListItem from "./DayListItem";


export default function DayList (props) {

  const daysListItem = props.days.map ((day) => {
    return (
      <DayListItem 
        key={day.id}
        name={day.name}
        spots={day.spots}
        // selected={day.selected}
        selected={day.name === props.value}
        setDay={props.setDay}
      />
    )
  })

  return (
  <ul>
    {daysListItem}
  </ul>
  );
}



// Within the <DayList> component, map over the days array to return <DayListItem> components as children.
// Remember to import the <DayListItem> component into <DayList>.

// <li className={dayClass} onClick={() => props.setDay(props.name)}>
// <h2 onClick={props.setDay} className="text--regular">{props.name}</h2> 
// <h3 className="text--light">{formatSpots(props.spots)}</h3>