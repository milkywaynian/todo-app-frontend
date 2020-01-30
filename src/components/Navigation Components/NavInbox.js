
import React from 'react'
import InboxBadge from './InboxBadge'
import { IoIosArrowRoundDown } from "react-icons/io";



class NavInbox extends React.Component {

    render() {
        return (
            <li className="nav-item">
                      <a className="nav-link" href="https://www.google.com/">
                       <IoIosArrowRoundDown/>Inbox <InboxBadge taskCount = {this.props.taskCount}/>
                </a>
                    </li>
        );
    }
  }
  
  export default NavInbox; 
