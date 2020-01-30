import React from "react";
import Header from './components/Header';
import Body from './components/Body'
import "./App.css";
import uuidv4 from 'uuid/v4';



class App extends React.Component {

  state = {
    incompleteTasks: [
      { id: uuidv4(), description: "buy a magazine", completed: false },
      { id: uuidv4(), description: "buy a book", completed: false },
      { id: uuidv4(), description: "buy a book", completed: false },
      { id: uuidv4(), description: "test", completed: false }
    ],

    completedTasks: []
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

