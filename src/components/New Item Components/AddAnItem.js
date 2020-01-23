import React from 'react'
import NewItemButton from "./NewItemButton"



class AddAnItem extends React.Component {

  state = {
    taskDescription : "Enter your task"
  }

  taskDescriptionChanged = (event) => {
    this.setState ({
      taskDescription: event.target.value
    })
  }   

    render() {
        return (
            <>
            <div className="card-body">
                <form>
                  <div className = "row">
                    <div className= "add-items d-flex col-sm-12 col-md-7"> <input type="text" class="form-control todo-list-input" placeholder="What is taking up your RAM?" name="new-todo" onChange = {this.taskDescriptionChanged}></input> </div>
                    <div className = "row pl-1">
                    <NewItemButton addTaskFunc = {this.props.addTaskFunc} taskInput = {this.state.taskDescription}/>
                    </div>
                  </div>
                </form>
            </div>
            </>
        );
    }
  }
  
  export default AddAnItem; 