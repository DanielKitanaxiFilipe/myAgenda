import React from 'react';
import { Day } from './Day';
export function Month({month}) {
  return (
  <div className="card-calender mb-5">
   <div class="card-header card-header-calender d-flex text-center">
      <div className="w-100">
        <h6>Tuesday</h6>
         </div>
        <div className="w-100">
         <h6>Wednesday</h6>
        </div>
        <div className="w-100">
          <h6>Thursday</h6>
        </div>
        <div className="w-100">
          <h6>Friday</h6>
        </div>
         <div className="w-100">
           <h6>Saturday</h6>
          </div>
           <div className="w-100">
            <h6>Sunday</h6>
          </div>
          <div className="w-100">
          <h6>Monday</h6>
          </div>
    </div>
    <div className="calender-day d-flex text-center">
      {month.map ((row, i) => (
        <React.Fragment key={i}>         
          {row.map ((day, idx) => (
            <div className="w-14px h-30px d-flex align-items-center justify-content-center"><Day day={day} key={idx} rowIdx={i}/></div>
          ))}
        </React.Fragment> 
      ))}
    </div>
  </div>
  );
}
