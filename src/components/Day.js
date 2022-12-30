import dayjs from 'dayjs';
import React, { useContext, useState, useEffect } from 'react';
import GlobalContext from '../context/GlobalContext';

export function Day({day, rowIdx}) {
  const [dayEvents, setDayEvents] = useState([])
  const {setDaySelected, setShowEventModal, savedEvents, setSelectedEnvent} = useContext(GlobalContext);
  useEffect(() => {
    const events = savedEvents.filter(evt => dayjs(evt.day).format("DD-MM-YY") === day.format("DD-MM-YY"));
    setDayEvents(events)
  }, [savedEvents, day]);

  function getCurrentDayClass(){
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY") 
    ? "text-primary" 
    : "";
  }
  return(
      <div className='cursor-crosshair p-3' onClick={() => {setDaySelected(day); setShowEventModal(true);}}>
        <font className={`p-4 ${getCurrentDayClass()}`}>{day.format("DD")}</font>
        {dayEvents.map((evt, idx) => (
          <div key={idx} onClick={() => setSelectedEnvent (evt)} className={`bg-State font-14px m-1 rounded p-1 bg-${evt.label}`}>
            {evt.title}
          </div>
        ))}
    </div>
  );
}
