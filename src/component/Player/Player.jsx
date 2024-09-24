import { Component } from 'react';
import ReactPlayer from 'react-player';

export class Player extends Component {
  state = {
    isVideoLoaded: false,
  };

  render() {
    return (
      <>
        {this.props.url && (
          <div>
            <ReactPlayer
              url={this.props.url}
              onReady={() => this.setState({ isVideoLoaded: true })}
              controls
            />
          </div>
        )}
      </>
    );
  }
}
