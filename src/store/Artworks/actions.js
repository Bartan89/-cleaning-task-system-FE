import { apiUrl, DEFAULT_PAGINATION_LIMIT } from "../../config/constants"
import axios from "axios"
import Axios from "axios"

export const FETCH_ARTWORKS_SUCCESS = "FETCH_ARTWORKS_SUCCESS"

export const fetchArtworksSuccess = Artworks => ({
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

export const postAuction = () => {
  return async (dispatch, getState) => {
    const response = await Axios.post("", {})
    console.log("hello")
  }
}
