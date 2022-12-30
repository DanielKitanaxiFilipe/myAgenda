import React, {useState, useContext, useEffect} from 'react';
import { getMonth } from './util'
import { CalendarHeader } from './components/CalendarHeader';
import { Menu } from './components/Menu';
import { Month } from './components/Month';
import { Sidebar } from './components/Sidebar';
import GlobalContext from './context/GlobalContext';
import { EventModal } from './components/EventModal';
function AppTest() {
const [currenMonth, setCurrenMonth] = useState (getMonth());
const {monthIndex, showEventModal} = useContext(GlobalContext);

  useEffect(() => {
    setCurrenMonth(getMonth(monthIndex));
  }, [monthIndex]);
  return (
    <React.Fragment>
      <Menu/>    
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-3">
            <Sidebar/>
            <div className="card card-alert">
                <div className="card-body">
                  <h5>Upgrade to Primium</h5>
                  <font className="font-13px">Go Pro unlock all features</font> <br />
                  <button type="button" className="btn btn-light font-14px mt-3">Upgrade Now!</button>
                </div>
              </div>
          </div>
          <div className="col-md-9">
          {showEventModal && <EventModal/>}      
          <CalendarHeader/>
          <Month month={currenMonth} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default AppTest;
