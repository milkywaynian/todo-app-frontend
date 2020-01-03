
import React from 'react'
import InboxBadge from './InboxBadge'


class NavInbox extends React.Component {

    render() {
        return (
            <li className="nav-item">
                       Inbox
                       <InboxBadge />
                    </li>
        );
    }
  }
  
  export default NavInbox; 
