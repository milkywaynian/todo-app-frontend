import React from 'react';
import '/Users/coding/step_into_tech_course/todo-app-frontend/src/App.css'

class Header extends React.Component {

    render() {
        return (
            <div className="row">
                 <div className = "col-12 d-none d-md-block navbar navbar-light bg-light navbar-brand main-header">
                 <img src="https://image.flaticon.com/icons/png/512/1584/1584942.png" width="30" height="30" className="d-inline-block align-top mr-2" alt="clock"></img>
                  GETTING THINGS DONE 
                 </div>
            </div>
        );
    }
  }
  
  export default Header; 