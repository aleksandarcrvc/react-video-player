import React from "react";
import Link from "./LinkToVideo";

export default class Player extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      source: '../../assets/videos/sample.mp4'
    };
  }
  setVideo(source){
    this.setState({source});
  }
  render() {
    return (
      <div>
        <video src={this.state.source} width="100%" height="600px"controls>
        </video>
        <Link changeSource={this.setVideo.bind(this)} source={'../../assets/videos/sample.mp4'} title='Samle video'/> |
        <Link changeSource={this.setVideo.bind(this)} source={'../../assets/videos/gummy-bear.mp4'} title='Gummy bear'/> |
        <Link changeSource={this.setVideo.bind(this)} source={'../../assets/videos/dp.mp4'} title='Drzavni posao'/>
      </div>
    );
  }
}
