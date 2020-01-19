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
  const tasks = this.state.tasks;
  const updatedTasks = tasks.filter(task => task.id !== taskId); 
  this.setState({ 
    tasks:updatedTasks
  });
  } 


render() {
  return (
    <div className="container">
      <Header />
      <Body taskCount={this.state.tasks.length} allTasks ={this.state.tasks} deleteTaskFunc = {this.deleteTask} />
    </div>
  );
}

}

export default App; 

