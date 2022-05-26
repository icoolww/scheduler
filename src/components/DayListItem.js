import React from "react";

import "components/DayListItem.scss";
import classNames from "classnames";



export default function DayListItem(props) {
  
  
  const dayClass = classNames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots === 0,
  });
  
       const formatSpots = function (spot) {
        let result = "";
        if (spot === 0) {
          result = "no spots remaining"
        }
        else if (spot === 1) {
          result = `1 spot remaining`
        }
        else {
          result = `${spot} spots remaining`
        }
        return result;
      }
      
  
  return (
    <li className={dayClass} onClick={() => props.setDay(props.name)} data-testid={props.name}>
      <h2 onClick={props.setDay} className="text--regular">{props.name}</h2> 
      <h3 className="text--light">{formatSpots(props.spots)}</h3>
    </li>
  );
}






// // before refactoring
// export default function DayListItem(props) {

//   return (
//     <li onClick={() => props.setDay(props.name)}>
//       <h2 onClick={props.setDay} className="text--regular">{props.name}</h2> 
//       <h3 className="text--light">{props.spots} spots remaining</h3>
//     </li>
//   );
// }
