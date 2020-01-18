
import React from 'react'
import InboxBadge from './InboxBadge'



class NavInbox extends React.Component {

    render() {
        return (
            <li className="nav-item">
                      <a className="nav-link" href="https://www.google.com/">
                       Inbox <InboxBadge test = {this.props.test}/>
                </a>
                    </li>
        );
    }
  }
  
  export default NavInbox; 
