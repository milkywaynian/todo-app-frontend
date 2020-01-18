import React from "react";
import Header from './components/Header';
import Body from './components/Body'
import "./App.css";


class App extends React.Component {

state = {
  tasks: [
    {id:1, description: "buy a magazine", completed: false},
    {id:2, description: "buy a book", completed: false},
    {id:2, description: "buy a book", completed: false}
  ]
}  

render() {
  return (
    <div className="container">
      <Header />
      <Body taskCount={this.state.tasks.length} allTasks ={this.state.tasks}/>
    </div>
  );
}

}

export default App; 

