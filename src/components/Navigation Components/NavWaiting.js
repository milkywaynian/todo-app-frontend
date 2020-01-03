
import React from 'react'
import WaitingBadge from './WaitingBadge'


class NavWaiting extends React.Component {

    render() {
        return (
            <li className="nav-item">
                       Waiting
                       <WaitingBadge />
                    </li>
        );
    }
  }
  
  export default NavWaiting; 