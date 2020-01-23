import React from "react";
import Header from './components/Header';
import Body from './components/Body'
import "./App.css";
import uuidv4 from 'uuid/v4';



class App extends React.Component {

state = {
  tasks: [
    {id: uuidv4(), description: "buy a magazine", completed: false},
    {id: uuidv4(), description: "buy a book", completed: false},
    {id: uuidv4(), description: "buy a book", completed: false},
    {id: uuidv4(), description: "test", completed: false}
  ]
}  

deleteTask = (taskId) => {
  
  const updatedTasks = this.state.tasks.filter(task => task.id !== taskId); 
  this.setState({ 
    tasks:updatedTasks
  });
  } 

addTask = (taskDescription) => {
  const newTask = {id: uuidv4(), description: taskDescription, completed: false};
  const allTasks = this.state.tasks;
  allTasks.push(newTask);
  this.setState({
    tasks:allTasks
  })
}


render() {
  return (
    <div className="container">
      <Header />
      <Body taskCount={this.state.tasks.length} allTasks ={this.state.tasks} deleteTaskFunc = {this.deleteTask} addTaskFunc = {this.addTask} />
    </div>
  );
}

}

export default App; 

