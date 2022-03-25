import React from 'react'

import {setFavoritesList,setVideoPlayerLinks} from "../../actions/index"
import FavoritesListItem from './FavoritesListItem';
import { useDispatch,useSelector } from 'react-redux';



function FavoritesList() {

const dispatch = useDispatch()
const favList = useSelector(state=> state.favoritesList)
const videoPlayerLinks = useSelector(state =>state.videoPlayerLinks)


function removeFavorite(idx){
  let copy = favList.slice()
  copy.splice(idx,1)
 
   dispatch(setFavoritesList([...copy ]))
 }

 function addFavoriteToPlayer(link){
  
  videoPlayerLinks.push(link)
 
   dispatch(setVideoPlayerLinks([...videoPlayerLinks ]))
 }

  return <div className = "favoritesContainerInit favoritesContainerPos1">
    <h4>FAVORITES</h4>
    
    {favList.map((link,i)=>{
      return (<FavoritesListItem link = {link} idx ={i} key = {link+i} addFavoriteToPlayer = {addFavoriteToPlayer} removeFavorite={removeFavorite} numberOfVids = {videoPlayerLinks.length}/>)
  })} </div>;
}

export default FavoritesList;
