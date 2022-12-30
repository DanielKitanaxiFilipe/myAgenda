import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';
export function Labels() {
  const {labels, updateLabel} = useContext(GlobalContext)
  return (
  <React.Fragment>
   <div className="card mb-4">
      <div className="card-body">
       <b className='mb-4'>Calender</b>
       {labels.map(({label: lbl, checked}, idx) => (
        <div className='mt-2 d-flex ' key={idx} onChange={()=> updateLabel({label: lbl, checked: !checked})} checked={checked}>
        <div className={`div-circle-calendar me-2 bg-${lbl}`}></div>
       <div className="mt-3negativ">{lbl}</div>
     </div>
      ))}           
      </div>
    </div>
  </React.Fragment>
  );
}