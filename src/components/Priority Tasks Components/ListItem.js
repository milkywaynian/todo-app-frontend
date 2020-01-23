import React from 'react'



class ListItem extends React.Component {

deleteAction = () => {
    this.props.deleteTaskFunc(this.props.item.id); 
}


    render() {
        return (
            <>
            <div className ="row">
                <div className ="col-md-7 col-sm-12">
                    <input className="form-check-input" type="checkbox" id="defaultCheck1"></input>
                    <label className="form-check-label pb-2" htmlFor="defaultCheck1">
                        <p>{this.props.item.description}</p>
                    </label>
                </div>
                
                <div className ="col-md-5">
                    <button type="button" className="btn btn-sm btn-warning buttonStyle">edit</button>
                    <button type="button" className="btn btn-sm btn-danger" onClick = {this.deleteAction}>delete</button>
                </div>
                
            </div>
            </>
        );
    }
  }

  
  export default ListItem; 
