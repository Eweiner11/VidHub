import React from 'react'
import {useSelector } from 'react-redux';
import ResponsivePlayer from './ResponsivePlayer';
const YoutubeVideoContainer = ({user}) => {

 const youtubeLinks = useSelector(state => state.videoPlayerLinks)

function videoClass(links,i){
if(links.length ===1 ){
  return `player-wrapper0${i}`
}else if(links.length === 2){
    return `player-wrapper1${i}`
}else{
   return  `player-wrapper${i}`
}
}


  return (
      <>
     
      {youtubeLinks.map((link,i) =>{
          var pos = videoClass(youtubeLinks,i)
          return (<ResponsivePlayer 
          user = {user}
          link = {link}
          position ={pos}
          index = {i}
          links = {youtubeLinks}
          />)
      })}
      </>
  );
}

export default YoutubeVideoContainer;
