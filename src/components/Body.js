import React from 'react';
import Navigation from './Navigation'
import PriorityTasks from './PriorityTasks'


class Body extends React.Component {

    render() {
        return (
        <div>
            <div className = "row">
            <div className="col-3 d-none d-md-block bg-light sidebar-sticky sidebar">
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