import React, { Component } from 'react';

class DispalyCard extends Component {
  render() {
  
    
    return (
      <>
        {this.props.silver && (
          <div className="silver">
            <p>FullName: {this.props.fullname}</p>
            <p>State: {this.props.state}</p>
            <p>Country: {this.props.country}</p>
            <p>district: {this.props.district}</p>
          </div>
        )}

        {this.props.tomato && (
          <div className="tomato">
            <p>Fullname: {this.props.fullname}</p>
            <p>State: {this.props.state}</p>
            <p>country: {this.props.country}</p>
            <p>district: {this.props.district}</p>
          </div>
        )}
      </>
    );
  }
}

export default DispalyCard;
