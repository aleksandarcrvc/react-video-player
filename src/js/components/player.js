import React from "react";

export default class Player extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      source: '../../assets/videos/sample.mp4'
    };
  }
  onClickHandler(event){
    let videoSource = event.target.getAttribute('data-video')
    this.setState({ source: videoSource });
  }
  render() {
    return (
      <div>
        <video src={this.state.source} width="100%" height="600px"controls>
        </video>
        <a href='javascript:void(0)' data-video="../../assets/videos/sample.mp4" onClick={this.onClickHandler.bind(this)}>Video 1</a> | &nbsp;&nbsp; 
        <a href='javascript:void(0)' data-video="../../assets/videos/gummy-bear.mp4" onClick={this.onClickHandler.bind(this)}>Video 2</a>       
      </div>
    );
  }
}
