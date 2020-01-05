import React from 'react'
import NewItemButton from "./NewItemButton"
import '/Users/coding/step_into_tech_course/todo-app-frontend/src/App.css'



class AddAnItem extends React.Component {

    render() {
        return (
            <>
            <div className="card-body">
                <form>
                  <div className = "row">
                    <div className= "add-items d-flex col-sm-12 col-md-8"> <input type="text" class="form-control todo-list-input" placeholder="What is taking up your RAM?" name="new-todo"></input> </div>
                    <div className = "row pl-1">
                    <NewItemButton />
                    </div>
                  </div>
                </form>
            </div>
            </>
        );
    }
  }
  
  export default AddAnItem; 