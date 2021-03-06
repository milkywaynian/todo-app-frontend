import React from 'react';
import Navigation from './Navigation'
import PriorityTasks from './PriorityTasks'



class Body extends React.Component {

    render() {
        return (
        <div>
            <div className = "row">
            <div className="col-3 d-none d-md-block bg-light sidebar sidebar-sticky">
            <Navigation taskCount = {this.props.taskCount}/>
            </div>

            <div className="col-9 middle">
            <PriorityTasks allTasks = {this.props.allTasks} deleteTaskFunc ={this.props.deleteTaskFunc} completeTaskFunc={this.props.completeTaskFunc} addTaskFunc = {this.props.addTaskFunc}/>
            </div>
            </div>
        </div>
        );
    }
  }
  
  export default Body; 