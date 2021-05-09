import React from "react"
import { useState, useEffect } from "react"
import { processBid } from "../../../store/artworkDetails/actions"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { minimumBid } from "../../../store/artworkDetails/selectors"
import { AddCreditToAUser } from "../../../store/users/actions"
import {selectDidSomeoneBid} from "../../../store/artworkDetails/selectors"
import Button from "react-bootstrap/Button"


export default function MakingABid() {
  const id = useParams().id



  const minimum = useSelector(minimumBid)

  const artWorkDetails = useSelector(selectDidSomeoneBid)

  console.log(artWorkDetails)
  

useEffect(() => {
  if(artWorkDetails === []){
    setPickedUp(false)
  }
}, [])


  console.log("MakingABid -> minimum", minimum)

  const [bid, setBid] = useState()
  const [warning, setWarning] = useState("")
  const [pickedUp, setPickedUp] = useState(false)

  const dispatch = useDispatch()

  function sendBid() {
  
    dispatch(processBid(id, minimum))
    console.log(minimum)
    dispatch(AddCreditToAUser(minimum ))
    setPickedUp(false)
    console.log(artWorkDetails)
  }

  return (
    <div>
      {/* <input onChange={(e) => setBid(parseInt(e.target.value))} type="number" value={bid} id="bidder" name="quantity" placeholder={`bid € ${minimum} or higher`} min={minimum} /> */}

      <p>{warning}</p>



        {artWorkDetails || pickedUp ?  <Button onClick={sendBid}>Take up task and receive  {minimum} credits</Button>  : ''  }
      
    </div>
 
  )
}
