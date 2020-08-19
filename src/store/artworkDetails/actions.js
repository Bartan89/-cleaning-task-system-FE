import axios from "axios"
import { apiUrl } from "../../config/constants"

export const ARTWORK_DETAILS_FETCHED = "ARTWORK_DETAILS_FETCHED"
export const PLUS_ONE_HEART = "PLUS_ONE_HEART"
export const UPDATE_BID_IN_VIEW = "UPDATE_BID_IN_VIEW"

const artworkDetailsFetched = artwork => ({
  type: ARTWORK_DETAILS_FETCHED,
  payload: artwork
})

export const fetchArtworkById = id => {
  return async (dispatch, getState) => {
    const response = await axios.get(`${apiUrl}/artworks/${id}`)

    dispatch(artworkDetailsFetched(response.data.artwork))
  }
}

export const addHeart = id => {
  return async (dispatch, getState) => {
    const currentAmountHearts = getState().artworkDetails.heart
    const SendToServer = currentAmountHearts + 1
    const heart = SendToServer
    console.log("addHeart -> SendToServer", heart)

    dispatch({
      type: PLUS_ONE_HEART,
      payload: { heart, artworkId: id }
    })

    const response = await axios.patch(`${apiUrl}/artworks/${id}`, {
      heart
    })
  }
}

const updateBid = (id, email, amount) => {
  return {
    type: UPDATE_BID_IN_VIEW,
    payload: { email, amount, id }
  }
}

export const processBid = (id, amount) => {
  return async (dispatch, getState) => {
    const JWT = getState().user.token
    const email = getState().user.email

    dispatch(updateBid(id, email, amount))

    const response = await axios.post(
      `${apiUrl}/artworks/${id}/bids`,
      {
        email,
        amount
      },
      {
        headers: {
          Authorization: `Bearer ${JWT}`
        }
      }
    )

    //console.log("response from the server on post bid request", response)

    //console.log("\nID: " + id + "\nBID: " + amount + "\nJWT: " + JWT + "\n EMAIL: " + email)
  }
}
