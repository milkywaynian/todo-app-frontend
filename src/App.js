import React from "react";
import Header from './components/Header';
import Body from './components/Body'
import "./App.css";
import uuidv4 from 'uuid/v4';



class App extends React.Component {

  state = {
    tasks: [
      { id: uuidv4(), description: "buy a magazine", completed: false },
      { id: uuidv4(), description: "buy a book", completed: false },
      { id: uuidv4(), description: "buy a book", completed: false },
      { id: uuidv4(), description: "test", completed: false }
    ]
  }

  deleteTask = (taskId) => {

    const updatedTasks = this.state.tasks.filter(task => task.id !== taskId);
    this.setState({
      tasks: updatedTasks
    });
  }

  incompleteItemsCount = () => {
      return this.state.tasks.filter(task => task.completed === false).length 
  }

  //todo: rewrite to make it simple - the break is quite confusing!
  completeTask = (taskId) => {
    const tasksBeingUpdated = this.state.tasks;
    for (let i = 0; i < tasksBeingUpdated.length; i++) {
      const updatedTask = tasksBeingUpdated[i]
        if(updatedTask.id === taskId) {
          updatedTask.completed = true;
          this.setState ({
            tasks: tasksBeingUpdated
          });
        }
    }
    console.log(tasksBeingUpdated); 

  }  

  addTask = (taskDescription) => {
    const newTask = { id: uuidv4(), description: taskDescription, completed: false };
    const allTasks = this.state.tasks;
    allTasks.push(newTask);
    this.setState({
      tasks: allTasks
    })
  }



  render() {
    return (
      <div className="container">
        <Header />
        <Body taskCount={this.incompleteItemsCount()} allTasks={this.state.tasks} deleteTaskFunc={this.deleteTask} addTaskFunc={this.addTask} completeTaskFunc={this.completeTask}/>
      </div>
    );
  }

}

export default App;

