import { apiUrl, DEFAULT_PAGINATION_LIMIT } from "../../config/constants"
import axios from "axios"
import Axios from "axios"

export const FETCH_ARTWORKS_SUCCESS = "FETCH_ARTWORKS_SUCCESS"
export const SET_MESSAGE = "SET_MESSAGE"
export const CLEAR_MESSAGE = "CLEAR_MESSAGE"

export const fetchArtworksSuccess = (Artworks) => ({
  type: FETCH_ARTWORKS_SUCCESS,
  payload: Artworks
})

export const fetchArtworks = () => {
  return async (dispatch, getState) => {
    // const homepagesCount = getState().artworks.length
    const homepagesCount = 0
    const response = await axios.get(`${apiUrl}/artworks?limit=${DEFAULT_PAGINATION_LIMIT}&offset=${homepagesCount}`)

    //console.log(response.data)
    dispatch(fetchArtworksSuccess(response.data.artworks.rows))
  }
}

const succesfulUploadArtwork = (message, id) => {
  return {
    type: SET_MESSAGE,
    payload: { message: message, id: id }
  }
}

export const postAuction = ({ title, imageUrl, minimumBid }) => {
  return async (dispatch, getState) => {
    const userId = getState().user.id
    const JWT = getState().user.token

    console.log("\n userId: " + userId + "\n title: " + title + "\nJWT: " + JWT + "\n imageUrl: " + imageUrl + "\n minimumBid" + minimumBid)
    const response = await Axios.post(
      `${apiUrl}/artworks`,
      {
        userId,
        title,
        imageUrl,
        minimumBid
      },
      {
        headers: {
          Authorization: `Bearer ${JWT}`
        }
      }
    )
    console.log(response.data.artwork.id)

    if (response.status === 201) {
      dispatch(succesfulUploadArtwork("Succesful upload, find your artwork on main page", response.data.artwork.id))
      setTimeout(() => dispatch(clearMessage()), 10000)
    }
  }
}

export const clearMessage = () => ({ type: CLEAR_MESSAGE })
//''
// title,
// imageUrl,
// minimumBid,
// userId
