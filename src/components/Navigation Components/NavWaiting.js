
import React from 'react'
import WaitingBadge from './WaitingBadge'
import '/Users/coding/step_into_tech_course/todo-app-frontend/src/App.css'


class NavWaiting extends React.Component {

    render() {
        return (
            <li className="nav-item">
                       <a className="nav-link" href="file:///Users/coding/step_into_tech_course/week-002-html/index.html#">
                       Waiting <WaitingBadge />
                </a>
                    </li>
        );
    }
  }
  
  export default NavWaiting; 