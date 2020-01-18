import React from 'react'



class InboxBadge extends React.Component {

    render() {
        return (
            <span className="badge badge-info">{this.props.test}</span>
        );
    }
  }
  
  export default InboxBadge; 

