import React from 'react'
import NavHome from './Navigation Components/NavHome'
import NavInbox from './Navigation Components/NavInbox'
import NavProjects from './Navigation Components/NavProjects'
import NavContexts from './Navigation Components/NavContexts'
import NavWaiting from './Navigation Components/NavWaiting'
import NavSomeday from './Navigation Components/NavSomeday'
import NavReference from './Navigation Components/NavReference'

class Navigation extends React.Component {

    render() {
        return (
            <div className = "row">
            <div className="col-3 d-none d-md-block bg-light sidebar-sticky sidebar">
               <ul className="nav flex-column">
                    <NavHome />
                    <NavInbox />
                    <NavProjects />
                    <NavContexts />
                    <NavWaiting />
                    <NavSomeday />
                    <NavReference />
                </ul>
            </div>
            </div>
        );
    }
  }
  
  export default Navigation; 