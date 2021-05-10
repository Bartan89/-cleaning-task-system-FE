import React from "react"
import Jumbotron from "react-bootstrap/Jumbotron"
import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom"
import { selectUsers } from "../../store/users/selectors"
import { useSelector } from "react-redux"

import "./artwork.css"

import HeartButton from "./HeartButton"

export default function Artwork(props) {
const users = useSelector(selectUsers)
  
const showPersonTakenUpTask = (cleaner) => {
    // const founduser = users.filter(e => e.email = cleaner?.email)

    // console.log(founduser?.name)
    return cleaner?.email
  
}

  return (
    <div className="artworkCard">
      <h5>{props.title}</h5>
      <img className="heroPic" src={props.pic} alt="" />
      <p>{props.description}</p>

   
      <p>
        {props.bids === 0 ? <span className="king">Receive: {props.cost} credits</span> : "picked up by: " + showPersonTakenUpTask(props.taskTakenUpBy)}
      </p>

      {props.showLink ? (
        <Link to={`/artworks/${props.id}`}>
          <Button>Learn more</Button>
        </Link>
      ) : null}
    </div>
  )
}
