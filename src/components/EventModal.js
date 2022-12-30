import { type } from '@testing-library/user-event/dist/type';
import React, { useContext, useState } from 'react';
import { getMonth } from '../util'
import GlobalContext from '../context/GlobalContext';
const labelsClasses = ["primary", "secondary", "success", "danger", "warning"];

export function EventModal() {
  const {setShowEventModal, daySelected, dispatchCalEvent, selectedEnvent, monthIndex} = useContext(GlobalContext);
  const [currentMonthIdx, setCurrentMonth] = useState (getMonth());
  const [title, setTitle] = useState(selectedEnvent ? selectedEnvent.title : "");
  const [discription, setDiscription] = useState(selectedEnvent ? selectedEnvent.discription : "");
  const [selectedLabel, setSelectedLabel] = useState(
    selectedEnvent
      ? labelsClasses.find((lbl) => lbl === selectedEnvent.label)
      : labelsClasses[0]
  );

  function handleSubmit(e){
    e.preventDefault();
    const calendarEvent = {
      title,
      discription,
      label: selectedLabel,
      day: daySelected.valueOf(),
      id: selectedEnvent ? selectedEnvent.id : Date.now(),
    }
    if(selectedEnvent){
      dispatchCalEvent({type: "update", payload: calendarEvent});
    }else{
      dispatchCalEvent({type: "push", payload: calendarEvent});
    }
    setCurrentMonth(getMonth(monthIndex));
    setShowEventModal(false);
  }

  return (
    <div className="ModalEvents d-flex justify-content-center align-items-center">
      <div className="modalEventesHeratd">
      <div class="modal-header p-3">
        <h5><b>Create new event</b></h5>
        {selectedEnvent && (
          <button onClick={() => {dispatchCalEvent({type: "delete", payload:selectedEnvent}); setShowEventModal(false)}} className='btn-trash'>
            <i className='fa fa-trash-o'/>
          </button>
        )}
        <button type="button" className="btn-close" onClick={() => setShowEventModal(false)}></button>
      </div>
      <form action="" className='card-body p-4 pt-0'>
        <input 
          type="text"
          name='title'
          placeholder='add title'
          value={title}
          required
          className='form-control border'
          onChange={(e) => setTitle(e.target.value)}
         />
         <h6 className='mt-3 mb-3'><b>{daySelected.format("dddd, MMMM, DD")}</b></h6>
         <input 
          type="text"
          name='Discription'
          placeholder='add a discription'
          value={discription}
          required
          className='form-control border'
          onChange={(e) => setDiscription(e.target.value)}
         />
         <div className='d-flex mt-3'>
          {labelsClasses.map((lblClass, i) => (
            <div onClick={() => setSelectedLabel(lblClass)} key={i} className={`bg-${lblClass} div-circle-calendar me-3`}>
              {selectedLabel === lblClass && (<i className='fa fa-check color-black'/>)}
            </div>
          ))}
         </div>
      </form>
      <div className='p-4 pt-0 d-grid'>
      <button type='sbmit' onClick={handleSubmit} class="btn btn-primary">salve</button>
      </div>
      </div>
    </div>
  );
}
