
import React from 'react'
import { IoIosHome } from "react-icons/io";


class NavHome extends React.Component {

    render() {
        return (
            <li className="nav-item">
                <a className="nav-link" href="https://www.google.com/">
                <IoIosHome /> HOME
                </a>
                    </li>
        );
    }
  }
  
  export default NavHome 
