import React from 'react'



class ListItem extends React.Component {

    render() {
        return (
            <>
            <div className ="row">
                <div className ="col-md-7 col-sm-12">
                    <input className="form-check-input" type="checkbox" id="defaultCheck1"></input>
                    <label className="form-check-label pb-2" for="defaultCheck1">
                        <p>{this.props.itemName}</p>
                    </label>
                </div>
                
                <div className ="col-md-5">
                    <button type="button" className="btn btn-sm btn-warning buttonStyle">edit</button>
                    <button type="button" className="btn btn-sm btn-danger">delete</button>
                </div>
                
            </div>
            </>
        );
    }
  }


//   <div className = "row">
//                     <div className= "add-items d-flex col-sm-12 col-md-8"> <input type="text" class="form-control todo-list-input" placeholder="What is taking up your RAM?" name="new-todo"></input> </div>
//                     <div className = "row pl-1">
//                     <NewItemButton />
//                     </div>
//                   </div>
  
  export default ListItem; 
