import React from 'react'

class Navigation extends React.Component {

    render() {
        return (
            <div className = "row">
            <div className="col-3 d-none d-md-block bg-light sidebar-sticky sidebar">
               <ul className="nav flex-column">
                    <li className="nav-item">
                       HOME
                    </li>
                    <li className="nav-item">
                       Inbox
                      
                    </li>
                    <li className="nav-item">
                        Projects
                    </li>
                    <li className="nav-item">
                        Contexts
                    </li>
                    <li className="nav-item">
                        Waiting
                    </li>
                    <li className="nav-item">
                        Someday
                    </li>
                    <li className="nav-item">
                        Reference
                    </li>
                </ul>
            </div>
            </div>
        );
    }
  }
  
  export default Navigation; 