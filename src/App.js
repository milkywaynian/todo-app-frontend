import React from "react";
import Header from './components/Header';
import Body from './components/Body'
import "./App.css";
import uuidv4 from 'uuid/v4';
import axios from "axios";



class App extends React.Component {

  state = {
    incompleteTasks: [
    ],

    completedTasks: []
  };

  componentDidMount = () => {
    axios.get('https://l9d6i1g2ii.execute-api.eu-west-2.amazonaws.com/dev/tasks')
     .then(function (response){
       //handle success
       console.log(response);
     })
      //handle errors
     .catch(function (error) {
       console.error(error);
     });
  }

  deleteTask = (taskId) => {

    const updatedTasks = this.state.incompleteTasks.filter(task => task.id !== taskId);
    this.setState({
      incompleteTasks: updatedTasks
    });
  }

  incompleteItemsCount = () => {
      return this.state.incompleteTasks.filter(task => task.completed === false).length 
  }

  completeTask = (taskId) => {
    const tasksBeingUpdated = this.state.incompleteTasks;
    for (let i = 0; i < tasksBeingUpdated.length; i++) {
        if(tasksBeingUpdated[i].id === taskId) {
          tasksBeingUpdated[i].completed = true;
          this.setState ({
            incompleteTasks: tasksBeingUpdated
          });
        }
    }
    console.log(tasksBeingUpdated); 

  }  

  addTask = (taskDescription) => {
    const newTask = { id: uuidv4(), description: taskDescription, completed: false };
    const allTasks = this.state.incompleteTasks;
    allTasks.push(newTask);
    this.setState({
      incompleteTasks: allTasks
    })
  }



  render() {
    return (
      <div className="container">
        <Header />
        <Body taskCount={this.incompleteItemsCount()} allTasks={this.state.incompleteTasks} deleteTaskFunc={this.deleteTask} addTaskFunc={this.addTask} completeTaskFunc={this.completeTask}/>
      </div>
    );
  }

}

export default App;

