import React from "react";

export default class Player extends React.Component {

  render() {
    const { source } = this.props; 
    return (
      <div>
        <video src={source} width="100%" controls>
        </video>
      </div>
    );
  }
}
