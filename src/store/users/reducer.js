import { STORE_USERS_AND_THEIR_NAMES } from "./actions"

const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case STORE_USERS_AND_THEIR_NAMES:
      console.log('hit', action.payload.data)
      return [...action.payload.data]
    //   localStorage.setItem("token", action.payload.token);
    //   return { ...state, ...action.payload };

    // case LOG_OUT:
    //   localStorage.removeItem("token");
    //   return { ...initialState, token: null };

    // case TOKEN_STILL_VALID:
    //   return { ...state, ...action.payload };

    default:
      return state;
  }
};
