import React from 'react'



class ListItem extends React.Component {

    deleteAction = () => {
        this.props.deleteTaskFunc(this.props.item.taskID);
    }

    checkboxClicked = () => {
        this.props.completeTaskFunc(this.props.item.taskID);
    }


    render() {

        let taskDescription;
        let buttonState;
    
        if (this.props.item.completed) {
                taskDescription = 
                <p className = "completed">{this.props.item.description}</p>
                buttonState =
                <button type="button" className="btn btn-sm btn-secondary buttonStyle" disabled>edit</button>
        } else {
                taskDescription = <p>{this.props.item.description}</p>
                buttonState = 
                <button type="button" className="btn btn-sm btn-warning buttonStyle">edit</button>
        }

        return (
            <>

            <div className="row">
                    <div className="col-md-7 col-sm-12">
                        <input className="form-check-input" type="checkbox" id="defaultCheck1" onChange={this.checkboxClicked}></input>
                        <label className="form-check-label pb-2" htmlFor="defaultCheck1">
                            {taskDescription}
                        </label>
                    </div>

                    <div className="col-md-5">
                        {buttonState}
                    <button type="button" className="btn btn-sm btn-danger" onClick={this.deleteAction}>delete</button>
                    </div>

                </div>
            </>
        );
    }
}


export default ListItem; 
