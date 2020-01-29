import React from 'react'
import ListItem from "./ListItem"



class PriorityItems extends React.Component {

  render() {
    return (
      <div>
        <div className="priority-container pb-5 pl-3">
          <ul className="d-flex flex-column form-check todo-list">
            <li>
              {
                this.props.allTasks.map(
                  (taskOption) => <ListItem key={taskOption.id} item={taskOption} deleteTaskFunc={this.props.deleteTaskFunc} completeTaskFunc={this.props.completeTaskFunc}/>

                )

              }
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default PriorityItems; 
