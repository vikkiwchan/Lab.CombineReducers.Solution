import { combineReducers } from 'redux';
import userReducer from './userReducer';
import roomsReducer from './roomsReducer';

export const AUTHENTICATED = 'AUTHENTICATED';
export const GOT_ROOMS = 'GOT_ROOMS';
export const BOOK_ROOM = 'BOOK_ROOM';

export default combineReducers({
  user: userReducer,
  rooms: roomsReducer,
});
