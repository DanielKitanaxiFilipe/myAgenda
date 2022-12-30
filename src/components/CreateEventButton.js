import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';
export function CreateEventButton() {
  const {setShowEventModal} = useContext (GlobalContext)
  return <button className='btn btn-primary pe-4 ps-4' onClick={() => setShowEventModal(true)}><font className="me-2">+</font> add</button>;
}