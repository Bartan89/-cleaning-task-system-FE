import { FETCH_ARTWORKS_SUCCESS } from "./actions"
import { PLUS_ONE_HEART as UPDATE_HEART_FROM_DETAILS } from "../artworkDetails/actions"
//import { ARTWORK_UPDATED } from "../user/actions"

const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARTWORKS_SUCCESS:
      return [...action.payload]

    case UPDATE_HEART_FROM_DETAILS:
      return state.map((artwork) => {
        if (artwork.id === parseInt(action.payload.artworkId)) {
          return { ...artwork, heart: action.payload.heart }
        } else {
          return { ...artwork }
        }
      })
    // case ARTWORK_UPDATED: {
    //   return state.map(homepage => {
    //     if (homepage.id !== action.payload.id) {
    //       return homepage
    //     }

    //     return { ...action.payload, stories: [...homepage.stories] }
    //   })
    // }
    default:
      return state
  }
}
