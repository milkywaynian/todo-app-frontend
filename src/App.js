import React from "react";
import Header from './components/Header';
import Body from './components/Body'
import "./App.css";
import axios from "axios";



class App extends React.Component {

  state = {
    incompleteTasks: [],

    completedTasks: []
  };

  componentDidMount = () => {
    console.log("calling backend server to retrieve state");
    axios.get('https://l9d6i1g2ii.execute-api.eu-west-2.amazonaws.com/dev/tasks')
     .then(response => {
       //handle success
       console.log(response.data.tasks);
       this.setState({
         incompleteTasks: response.data.tasks
       })
     })
      //handle errors
     .catch(function (error) {
       console.error(error);
     });
  }

  deleteTask = (taskId) => {
    
    axios.delete(`https://l9d6i1g2ii.execute-api.eu-west-2.amazonaws.com/dev/tasks/${taskId}`)
     .then(response => {
       //handle success
       const updatedTasks = this.state.incompleteTasks.filter(task => task.taskID !== taskId);
      this.setState({
      incompleteTasks: updatedTasks
    });
     })
      //handle errors
     .catch(function (error) {
       console.error(error);
     });

  }

  incompleteItemsCount = () => {
      return this.state.incompleteTasks.filter(task => task.completed === false).length 
  }

  completeTask = (taskId) => {

    axios.put(`https://l9d6i1g2ii.execute-api.eu-west-2.amazonaws.com/dev/tasks/${taskId}`)
    .then(response => {
      //handle success
      const tasksBeingUpdated = this.state.incompleteTasks;
      for (let i = 0; i < tasksBeingUpdated.length; i++) {
          if(tasksBeingUpdated[i].taskID === taskId) {
            tasksBeingUpdated[i].completed = true;
            this.setState ({
              incompleteTasks: tasksBeingUpdated
            });
          }
      }
      console.log(tasksBeingUpdated); 


    })
     //handle errors
    .catch(function (error) {
      console.error(error);
    });
  }; 

  addTask = (taskDescription) => {
    const newTask = { 
      description: taskDescription,
      completed: false,
      userID : 1 
    }

    axios.post('https://l9d6i1g2ii.execute-api.eu-west-2.amazonaws.com/dev/tasks', newTask)
    .then(response => {

      // newTask.taskID = response.data.task.taskID;
       // //handle success
      console.log(JSON.stringify(response.data));

      const allTasks = this.state.incompleteTasks;
      allTasks.push(newTask);
      this.setState({
        incompleteTasks: allTasks
      });
    })
     //handle errors
    .catch((error) => {
      console.error(error);
    });     
  
  };


  



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

