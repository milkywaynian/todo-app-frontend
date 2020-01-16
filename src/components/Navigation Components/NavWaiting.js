
import React from 'react'
import WaitingBadge from './WaitingBadge'



class NavWaiting extends React.Component {

    render() {
        return (
            <li className="nav-item">
                       <a className="nav-link" href="https://www.google.com/">
                       Waiting <WaitingBadge />
                </a>
                    </li>
        );
    }
  }
  
  export default NavWaiting; 