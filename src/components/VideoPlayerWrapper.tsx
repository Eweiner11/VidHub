import React from 'react';
import ReactPlayer from 'react-player';
interface videoPlayer {
    url:string;
}

const VideoPlayerWrapper = ({url}:videoPlayer) => {
  // This container style will maintain the 16:9 aspect ratio
  const playerWrapperStyle: React.CSSProperties = {
    position: 'relative',
    paddingTop: '56.25%', // 16:9 aspect ratio
    height: 0, // This makes the padding top act as the height
    width:'100%',
    objectFit: "cover"
  };

  const playerStyle:React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    objectFit: "cover"
  };

  return (
    <div style={playerWrapperStyle}>
      <ReactPlayer
        url={url}
        style={playerStyle}
        width='100%'
        height='100%'
        on
        controls
      />
    </div>
  );
};

export default VideoPlayerWrapper;
