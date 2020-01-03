import React from 'react'
import PriorityHeader from "./Priority Tasks Components/PriorityHeader"
import PriorityItems from "./Priority Tasks Components/PriorityItems"

class PriorityTasks extends React.Component {

    render() {
        return (
        <>
            <PriorityHeader />
            <PriorityItems />
         </>
        );
    }
  }


  export default PriorityTasks; 