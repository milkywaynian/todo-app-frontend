import React from 'react'
import PriorityHeader from "./Priority Tasks Components/PriorityHeader"
import PriorityItems from "./Priority Tasks Components/PriorityItems"
import AddANewItemHeader from "./New Item Components/AddANewItemHeader"
import AddAnItem from "./New Item Components/AddAnItem"
import '/Users/coding/step_into_tech_course/todo-app-frontend/src/App.css'


class PriorityTasks extends React.Component {

    render() {
        return (
        <>
            <PriorityHeader />
            <PriorityItems />
            <AddANewItemHeader />
            <AddAnItem />
         </>
        );
    }
  }


  export default PriorityTasks; 