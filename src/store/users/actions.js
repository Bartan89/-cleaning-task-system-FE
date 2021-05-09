import axios from "axios"
import { apiUrl } from "../../config/constants"

export const STORE_USERS_AND_THEIR_NAMES = "STORE_USERS_AND_THEIR_NAMES"


export const storeUsersAndTheirNames = (usersAndtheirNames) => ({
  type: STORE_USERS_AND_THEIR_NAMES,
  payload: usersAndtheirNames
})

export const fetchUsersAndTheirNames = () => {
  return async (dispatch, getState) => {


    const response = await axios.get(`${apiUrl}/all-users`)

    console.log(response.data)
    dispatch(storeUsersAndTheirNames(response))
  }
}

export const AddCreditToAUser = (amount) => {
  return async (dispatch, getState) => {

    const email = getState().user.email


    const response = await axios.post(`${apiUrl}/add-credit`, { amount, email})

    console.log(response.data)
    dispatch(storeUsersAndTheirNames(response))
  }
}