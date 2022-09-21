import { combineReducers } from 'redux';

const user = (state = null) => state

const loggedIn = (state = false, action) => {
  switch (action.type) {
    case "LOG_USER":
      let logIn = state;
      logIn = true;
      return logIn;
    case "LOGOUT_USER":
      let logOut = state;
      logOut = false;
      return logOut;
    default:
      return state;
  }
};

const listings = (state = [], action) => {
    switch (action.type) {
      case "ADD_LISTING":
        return [...state, action.value];
      case "REMOVE_LISTING":
        let newState = [...state];
        newState.splice(action.value, 1);
        return newState;
      default:
        return state;
    }
  };

export default combineReducers({ user, loggedIn, listings })