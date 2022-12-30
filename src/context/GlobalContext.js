import React from "react";
const GlobalContext = React.createContext({
  monthIndex: 0,
  setMonthIndex: (index) => {},
  smallCalenderMonth: 0,
  setSmallCalenderMonth: (index) => {},
  daySelected: null,
  setDaySelected: (day) => {},
  showEventModal: false,
  setShowEventModal: () => {},
  dispatchCalEvent: ({type, payload}) => {},
  savedEvents: [],
  selectedEnvent: null,
  setSelectedEnvent: () => {},
  labels:[], 
  setLabels: () => {},
  updateLabel: () => {},
  filteredEvents: [],
});
export default GlobalContext; 