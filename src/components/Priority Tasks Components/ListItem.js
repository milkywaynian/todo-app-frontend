import React from 'react'


class ListItem extends React.Component {

    render() {
        return (
            <>
             <input class="form-check-input" type="checkbox" id="defaultCheck1"></input>
             <label class="form-check-label pr-3 pb-2" for="defaultCheck1">
                Task 1
             </label>
             <button type="button" class="btn btn-sm btn-warning">edit</button>
             <button type="button" class="btn btn-sm btn-danger">delete</button>
            </>
        );
    }
  }
  
  export default ListItem; 
