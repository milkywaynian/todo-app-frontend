import React from 'react'



class InboxBadge extends React.Component {

    render() {
        return (
            <span className="badge badge-info">{this.props.taskCount}</span>
        );
    }
  }
  
  export default InboxBadge; 

