import React from 'react'


class NewItemButton extends React.Component {

    addNewTask = () => {
        this.props.addTaskFunc(this.props.taskInput); 
    }

    render() {
        return (
            <>
                <submit className="add btn btn-primary font-weight-bold todo-list-add-btn" onClick = {this.addNewTask}>Add</submit>
            </>
        );
    }
  }
  
  export default NewItemButton; 


