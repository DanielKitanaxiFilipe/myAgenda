import React from 'react';
import user from '../assets/phot/alex.jpg';
export function Menu() {
  return (
    <nav className="navbar ps-0 pe-0 navbar-expand-lg navbar-light">
      <div className="container">
       <a class="navbar-brand" href="#"><img src="" /><b>My Agenda</b></a>
        <div className=" navbar-collapse  justify-content-center" >
         <div className="navbar-nav">
          <a className="nav-link me-4" href="#">Dashboard</a>
           <a className="nav-link me-4 active" href="#">Calendar</a>
            <a className="nav-link me-4" href="#">Analytics</a>
            </div>
          </div>
          <div class="d-flex">
         <div className="avatar">
          <img src={user} alt="" />
         </div>
       </div>
      </div>
     </nav>
  );
}