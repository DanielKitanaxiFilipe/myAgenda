import React, { useState, useEffect, useReducer, useMemo } from 'react';
import GlobalContext from './GlobalContext';
import dayjs from 'dayjs';

function savedEventsReducer(state, {type, payload}){
  switch (type) {
    case 'push':      
     return [...state, payload];  
    case "update":
      return state.map(evt => evt.id === payload.id ? payload : evt)
    case "delete":
      return state.filter(evt => evt.id !== payload.id)
    default:
      throw new Error();
  }
}
function initEvents(){
  const storageEvents = localStorage.getItem('savedEvents')
  const parsedEvents = storageEvents ? JSON.parse (storageEvents) : []
  return parsedEvents
}

function ContextWrapper(props) {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [smallCalenderMonth, setSmallCalenderMonth] = useState(null);
  const [daySelected, setDaySelected] = useState(dayjs());
  const [showEventModal, setShowEventModal] = useState(false);
  const [selectedEnvent, setSelectedEnvent] = useState(null);
  const [labels, setLabels] = useState([]);
  const [savedEvents, dispatchCalEvent] = useReducer(savedEventsReducer, [], initEvents);

  const filteredEvents = useMemo(() => {
    return savedEvents.filter((evt) =>
      labels
        .filter((lbl) => lbl.checked)
        .map((lbl) => lbl.label)
        .includes(evt.label)
    );
  }, [savedEvents, labels]);

  useEffect(() => {
    localStorage.setItem("savedEvents", JSON.stringify(savedEvents));
  }, [savedEvents]);
  
  useEffect(() => {
    setLabels((prevLabels) => {
      return[...new Set( savedEvents.map((evt) => evt.label))].map( (label) => {
        const currentLabel = prevLabels.find((lbl) => lbl.label === label)
        return{
          label,
          checked: currentLabel ? currentLabel.checked : true,
        };
      });
    });
  }, [savedEvents]);
  
  useEffect(() => {
    if(smallCalenderMonth !== null){
      setMonthIndex(smallCalenderMonth)
    }
  }, [smallCalenderMonth]);

  function updateLabel(label) {
    setLabels(
      labels.map((lbl) => (lbl.label === label.label ? label : lbl))
    );
  }

  return (
    <GlobalContext.Provider 
    value={{monthIndex, 
            setMonthIndex, 
            smallCalenderMonth, 
            setSmallCalenderMonth, 
            daySelected, 
            setDaySelected,
            showEventModal,
            setShowEventModal,
            dispatchCalEvent,
            selectedEnvent, 
            setSelectedEnvent,
            savedEvents,
            labels, 
            setLabels,
            updateLabel,
            filteredEvents
            }}>
      {props.children}
    </GlobalContext.Provider>
  );
}
export default ContextWrapper;