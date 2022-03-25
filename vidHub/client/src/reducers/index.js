import { combineReducers } from 'redux';
import favoritesListReducer from './favoritesList';
import userReducer from './user';
import videoPlayerLinksReducer from './videoPlayerLinks';






const rootReducer = combineReducers({
favoritesList:favoritesListReducer,
user:userReducer,
videoPlayerLinks:videoPlayerLinksReducer
});

export default rootReducer;