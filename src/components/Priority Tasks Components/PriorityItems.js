import React from 'react'
import ListItem from "./ListItem"



class PriorityItems extends React.Component {

    render() {
        return (
         <div>
            <div className = "priority-container pb-5 pl-3">
            <ul className="d-flex flex-column form-check todo-list">
                <div className = "row">
                  <li>
                    <ListItem />
                  </li>
                </div>
            </ul>
         </div>
         </div>
        );
    }
  }
  
  export default PriorityItems; 
