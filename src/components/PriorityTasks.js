import React from 'react'
import PriorityHeader from "./Priority Tasks Components/PriorityHeader"
import PriorityItems from "./Priority Tasks Components/PriorityItems"
import AddANewItemHeader from "./New Item Components/AddANewItemHeader"
import AddAnItem from "./New Item Components/AddAnItem"



class PriorityTasks extends React.Component {

    render() {
        return (
        <>
            <PriorityHeader />
            <PriorityItems allTasks = {this.props.allTasks} deleteTaskFunc ={this.props.deleteTaskFunc}/>
            <AddANewItemHeader />
            <AddAnItem />
         </>
        );
    }
  }


  export default PriorityTasks; 