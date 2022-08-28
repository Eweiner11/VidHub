import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios'
import {setVideoPlayerLinks,setFavoritesList} from "./actions";
import YoutubeSearchContainer from './components/youtubeSearch/YoutubeSearchContainer';
import YoutubeVideoContainer from './components/youtubeVideoContainer/YoutubeVideoContainer';
import FavoritesList from './components/favoritesList/FavoritesList';
import GoogleBtn from './components/googleButton/GoogleBtn';
import LinkInput from './components/LinkInput/LinkInput';
import Footer from './components/footer/Footer';



const App = (props) =>{
    const dispatch = useDispatch()
    const videoLinks = useSelector(state => state.videoPlayerLinks)
    const [user,setUser] = useState('')
     
  function addToPlayer(link){

    videoLinks.push(link)

    dispatch(setVideoPlayerLinks([...videoLinks]))
    
  }
 function populateUserNameandFavorites(){
    let userName = window.localStorage.getItem('userName')
    setUser(userName)
    if(userName!== ""){
        axios.get('/favorites', {
          params: {
            userName: userName,
          },
        })
        .then(({ data }) => {
          dispatch(setFavoritesList([...data]))
         
        });
    }else{
      dispatch(setFavoritesList([]))
    }
  }
  
  useEffect(()=>{

     populateUserNameandFavorites();

  },[user])

 
  const hubClassSelector = () => {
      let length = videoLinks.length
    if (length === 0) {
      return "hubContainerInit";
    } else if (length <= 2) {
      return "hubContainerPos1";
    } else {
      return "hubContainerPos2";
    }
  };
   
 return (<><div className = "main">
    
 <GoogleBtn dispatch = {dispatch} loggedIn ={user=== '' ? false:true} user = {user} setUser = {setUser}/>
 <LinkInput addToPlayer = {addToPlayer}/>
 <div className="title">VIDHUB</div>
  
 <YoutubeVideoContainer user = {user}/>
 <div className = { `${hubClassSelector()}`}>
 <FavoritesList/>
<YoutubeSearchContainer addToPlayer = {addToPlayer}/>

</div>
 </div>
 <Footer/>
 </>
)
}

export default App        

