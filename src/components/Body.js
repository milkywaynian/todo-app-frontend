import React from 'react';
import Navigation from './Navigation'
import PriorityTasks from './PriorityTasks'
import '/Users/coding/step_into_tech_course/todo-app-frontend/src/App.css'


class Body extends React.Component {

    render() {
        return (
        <div>
            <div className = "row">
            <div className="col-3 d-none d-md-block bg-light sidebar sidebar-sticky">
            <Navigation />
            </div>

            <div className="col-9 middle">
            <PriorityTasks />
            </div>
            </div>
        </div>
        );
    }
  }
  
  export default Body; 