import React from "react";
import { Media } from "react-bootstrap";
import { useDispatch} from 'react-redux';


const YoutubeSearchItem = ({title,description,thumbnail,id,addToPlayer}) => {

  const videoLink = `https://www.youtube.com/watch?v=${id}`;
  
  const dispatch = useDispatch();

 
  

  
  return (
    <div className="youtubeListItem" onClick={()=>addToPlayer(videoLink)}>
      <Media>
        <img className="mr-3" src={thumbnail} alt="Generic placeholder" />
        <Media.Body>
          <h5>{title.slice(0, 40)}</h5>
          <p>{description.slice(0, 150)}</p>
        </Media.Body>
      </Media>
      <hr className="solid" />
    </div>
  );
};

export default YoutubeSearchItem;
