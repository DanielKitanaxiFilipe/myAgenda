import dayjs from "dayjs";
import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';
import { CreateEventButton } from "./CreateEventButton";
export function CalendarHeader() {
  const {monthIndex, setMonthIndex} = useContext(GlobalContext);
  function handleReset(){
    setMonthIndex(monthIndex === dayjs().month() ? monthIndex + Math.random() : dayjs().month());
  }
  function handlePrevMonth(){
    setMonthIndex(monthIndex - 1);
  }
  function handleNextMonth(){
    setMonthIndex(monthIndex + 1);
  }
  return (
<nav className='d-flex mb-4'>
  <div className="w-100">
       <div className="data-nav d-flex">
         <div className='me-3 nav-title-calender'><h3><b> {dayjs (new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}</b></h3></div>
          <div>
          <button type="button" class="btn btn-chevron-nav" onClick={handlePrevMonth}><i className='fa fa-chevron-left'/></button>
          <button type="button" class="btn btn-chevron-nav" onClick={handleNextMonth}><i className='fa fa-chevron-right'/></button>
        </div>
      </div>
     </div>
      <div className="w-100 text-right">
        <div className='mt-10negativ'>
          <button type="button" class="btn btn-outline-primary me-3 pe-4 ps-4" onClick={handleReset}>Today</button>
          <CreateEventButton/>
        </div>
      </div>
    </nav>
  );
}
