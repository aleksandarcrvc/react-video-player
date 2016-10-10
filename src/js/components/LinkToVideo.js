import React from "react";

export default class Link extends React.Component {
  onClickHandler(event){
    let videoSource = event.target.getAttribute('data-video')
    this.props.changeSource(videoSource);
  }
  render() {
    return (
        <a href='javascript:void(0)' data-video={this.props.source} onClick={this.onClickHandler.bind(this)}>
            {this.props.title}
        </a>       
    );
  }
}
