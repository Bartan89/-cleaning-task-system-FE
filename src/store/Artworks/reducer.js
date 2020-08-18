import { FETCH_ARTWORKS_SUCCESS } from "./actions"
//import { ARTWORK_UPDATED } from "../user/actions"

const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARTWORKS_SUCCESS:
      return [...state, ...action.payload]
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
