const videoPlayerLinksReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_VIDEO_PLAYER_LINKS':
        return action.payload;
      default:
        return state;
    }
  };
  
  export default videoPlayerLinksReducer;