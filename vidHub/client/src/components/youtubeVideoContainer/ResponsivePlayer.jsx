
import React, { useState } from "react";
import {useDispatch,} from 'react-redux'
import ReactPlayer from "react-player";
import FavoritesModal from './FavoritesModal.jsx'
import {setVideoPlayerLinks} from '../../actions'

const ResponsivePlayer = (props) => {
  const [exitButtonView, changeExitButtonView] = useState(false);
  const [modal,changeModal]=useState(false)
  const [favoriteNickname,changeFavoriteNickname]=useState("")
  const dispatch = useDispatch()
 
  
  const favorited = () => {

    changeModal(true)
    
   
  };
  console.log(ReactPlayer.canPlay(props.link))
return (
    <div
      className={props.position}
      onMouseEnter={() => changeExitButtonView(true)}
    
    >
      {exitButtonView === true ? (
        <>
          <div
            className="exitButton"
          
            onClick={() => {
            
              props.links.splice(props.index,1)
             dispatch(setVideoPlayerLinks([...props.links]))
            }}
        >❌</div>
          <span/>
          <span
            className="favButton"
            onClick={() => favorited()}
          >
            ♡
          </span>
        </>
      ) : null}
      <ReactPlayer
        className="react-player"
        url={props.link}
        width="100%"
        height="100%"
        controls={true}
        playing={true}
        muted={true}
      />
      {modal ? <FavoritesModal changeFavoriteNickname ={changeFavoriteNickname} link = {props.link} userName = {props.user}/>:null}
    </div>
  );
};
export default ResponsivePlayer;
