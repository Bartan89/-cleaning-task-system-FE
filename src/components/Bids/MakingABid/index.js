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

  const dynamic = 1000

  const [bid, setBid] = useState()

  const dispatch = useDispatch()

  function sendBid(event) {
    event.preventDefault()

    console.log(bid)

    dispatch(processBid(id, bid))
  }

  return (
    <form onSubmit={sendBid}>
      <label htmlFor="bidder">Amount in EUR:</label>
      <input onChange={e => setBid(e.target.value)} type="number" value={bid} id="bidder" name="quantity" placeholder="hello" min={minimum} />
      <input type="submit" />
    </form>
  )
}
