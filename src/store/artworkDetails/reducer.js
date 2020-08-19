import { ARTWORK_DETAILS_FETCHED, PLUS_ONE_HEART, UPDATE_BID_IN_VIEW } from "./actions"

const initialState = {
  //stories: []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ARTWORK_DETAILS_FETCHED:
      return { ...state, ...payload }
    case PLUS_ONE_HEART:
      console.log(payload)
      return { ...state, heart: payload.heart }
    case UPDATE_BID_IN_VIEW:
      console.log("what is inside", payload)
      console.log("And what is inside", state)
      return { ...state, bids: [...state.bids, { ...payload }] }
    default:
      return state
  }
}
