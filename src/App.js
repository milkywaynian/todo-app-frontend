import React from "react";
import Header from './components/Header';
import Body from './components/Body'
import "./App.css";


class App extends React.Component {

state = {
  tasks: [
    {id:1, description: "buy a magazine", completed: false},
    {id:2, description: "buy a book", completed: false},
    {id:3, description: "buy a book", completed: false},
    {id:4, description: "test", completed: false}
  ]
}  

deleteTask = (taskId) => {
  
  const updatedTasks = this.state.tasks.filter(task => task.id !== taskId); 
  this.setState({ 
    tasks:updatedTasks
  });
  } 

addTask = (taskDescription) => {
  const newTask = {description: taskDescription};
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

