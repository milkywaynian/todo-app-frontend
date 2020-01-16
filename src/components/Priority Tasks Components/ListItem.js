import React from 'react'
import TaskDescription from './TaskDescription'



class ListItem extends React.Component {

    render() {
        return (
            <>
             <input className="form-check-input" type="checkbox" id="defaultCheck1"></input>
             <label className="form-check-label pr-3 pb-2" for="defaultCheck1">
                <TaskDescription 
                    description = "test"
                />

             </label>
             <button type="button" className="btn btn-sm btn-warning buttonStyle">edit</button>
             <button type="button" className="btn btn-sm btn-danger">delete</button>
            </>
        );
    }
  }
  
  export default ListItem; 
