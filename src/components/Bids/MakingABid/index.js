import React from "react"
import { useState } from "react"
import { processBid } from "../../../store/artworkDetails/actions"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { minimumBid } from "../../../store/artworkDetails/selectors"

export default function MakingABid() {
  const id = useParams().id

  const minimum = useSelector(minimumBid)
  console.log("MakingABid -> minimum", minimum)

  const [bid, setBid] = useState()
  const [warning, setWarning] = useState("")

  const dispatch = useDispatch()

  function sendBid(event) {
    setWarning("")
    event.preventDefault()

    console.log(bid)
    console.log("what are you????", typeof bid)
    if (bid === undefined) {
      setWarning("provide a number please")
    } else {
      dispatch(processBid(id, bid))
    }
  }

  return (
    <form onSubmit={sendBid}>
      <label htmlFor="bidder">Amount in EUR:</label>
      <input onChange={(e) => setBid(parseInt(e.target.value))} type="number" value={bid} id="bidder" name="quantity" placeholder={`bid € ${minimum} or higher`} min={minimum} />
      <input type="submit" />
      <p>{warning}</p>
    </form>
  )
}
