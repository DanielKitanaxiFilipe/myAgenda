import dayjs from 'dayjs';
import React, { useContext, useEffect, useState } from 'react';
import GlobalContext from "../context/GlobalContext";
import {getMonth} from '../util'

export function SmallCalender() {
  const [currentMonthIdx, setCurrentMonthIdx] = useState(dayjs().month());
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  
  useEffect(()=> {
    setCurrentMonth(getMonth(currentMonthIdx));
  }, [currentMonthIdx]);

  const {monthIndex, setSmallCalenderMonth, setDaySelected, daySelected} = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonthIdx(monthIndex);
  }, {monthIndex});

  function handlePrevMonth(){
    setCurrentMonthIdx(currentMonthIdx - 1);
  }
  function handleNaxtMonth(){
    setCurrentMonthIdx (currentMonthIdx + 1);
  }
  function getDayClass(day) {
    const format = "DD-MM-YY";
    const nowDay = dayjs().format(format);
    const currDay = day.format(format);
    const slcDay = daySelected && daySelected.format(format);
    if(nowDay === currDay) {
      return "btn active";
    }else if (currDay === slcDay) {
      return "btn btn-active";
    } else{
      return "";
    }
  }
  return (<>
 <div className="card border-0 mb-4">
  <div class="card-header d-flex">
    <div className="w-100 ps-2"><b>{dayjs(new Date(dayjs().year(), currentMonthIdx)).format("MMMM YYYY")}</b></div>
    <div className="w-100 text-right">
      <button type="button" class="btn btn-chevron" onClick={handlePrevMonth}><i className='fa fa-chevron-left'/></button>
      <button type="button" class="btn btn-chevron" onClick={handleNaxtMonth}><i className='fa fa-chevron-right'/></button>
    </div>
  </div>
  <div className="card-body pt-2">
   <div className="calander ">
    <div className="d-flex  text-center">
     {currentMonth[0].map((day,i) => (
      <div key={i} className="w-100">
       {day.format("ddd")}
    </div>
    ))}
    </div>
    <div className='mt-3'>
     {currentMonth.map((row, i) => (
      <React.Fragment key={i} >
       {row.map((day, idx) => (
        <button  key={idx} onClick={() => {setSmallCalenderMonth(currentMonthIdx); setDaySelected(day)}} className={`btn btn-calander ${getDayClass(day)}`}>
         <span>{day.format('D')}</span>
        </button>
      ))}
      </React.Fragment>
    ))}
  </div>
  </div>
 </div>
 <div>       
 <div>       
 </div>
 </div>
 </div>
</>);
}