import React from 'react'



class AddAnItem extends React.Component {

    render() {
        return (
            <>
            <div className="card-body">
                <form>
                  <div className = "row">
                    <div className= "add-items d-flex col-sm-12 col-md-8"> <input type="text" class="form-control todo-list-input" placeholder="What is taking up your RAM?" name="new-todo"></input> </div>
                    <div className = "row pl-1">
                    <submit className="add btn btn-primary font-weight-bold todo-list-add-btn">Add</submit>
                    </div>
                  </div>
                </form>
            </div>
            </>
        );
    }
  }
  
  export default AddAnItem; 