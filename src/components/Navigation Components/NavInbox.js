
import React from 'react'
import InboxBadge from './InboxBadge'



class NavInbox extends React.Component {

    render() {
        return (
            <li className="nav-item">
                      <a className="nav-link" href="file:///Users/coding/step_into_tech_course/week-002-html/index.html#">
                       Inbox <InboxBadge />
                </a>
                    </li>
        );
    }
  }
  
  export default NavInbox; 
