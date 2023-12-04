import MainContent from '../layout/MainContent';
import { useVideo } from '../contexts/VideoListContext';
import VideoPlayerWrapper from './VideoPlayerWrapper';
import { useEffect, useRef } from 'react';

const VideoGrid = () => {
  const { videos } = useVideo();



  // Generate the grid style dynamically based on the number of videos
  const gridStyle = {
    gridTemplateColumns: `repeat(${Math.ceil(Math.sqrt(videos.length))}, 1fr)`,
    gridTemplateRows: `repeat(${Math.ceil(videos.length / Math.ceil(Math.sqrt(videos.length)))}, 1fr)`,
  };

  return (
    <MainContent  style={gridStyle}>
      {videos.map((video:string, index:number) => (
        <VideoPlayerWrapper url = {video}/>
      ))}
    </MainContent>
  );
};

export default VideoGrid;
