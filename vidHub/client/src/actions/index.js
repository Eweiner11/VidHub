export const setFavoritesList = (list) => {
  console.log(list)
  return {
    type: 'SET_FAVORITES_LIST',
    payload: list,
  };
};


export const setVideoPlayerLinks = (links) => {
  return {
    type: 'SET_VIDEO_PLAYER_LINKS',
    payload: links,
  };
};

export const setUser = (userName) => {
  return{
    type:'SET_USER',
    payload:username
  }
}