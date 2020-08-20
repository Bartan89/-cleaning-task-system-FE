import React from "react"
import Jumbotron from "react-bootstrap/Jumbotron"
import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom"
import "./artwork.css"

import HeartButton from "./HeartButton"

export default function Artwork(props) {
  return (
    <div className="artworkCard">
      <h5>{props.title}</h5>
      <img className="heroPic" src={props.pic} alt="" />
      <p>{props.description}</p>
      <h2>
        {props.heart} hearts {props.showHeartBtn ? <HeartButton /> : null}
      </h2>
      <p>
        {props.bids} {props.bids === 1 ? "bid" : "bids"}
      </p>
      {props.showLink ? (
        <Link to={`/artworks/${props.id}`}>
          <Button>Learn more</Button>
        </Link>
      ) : null}
    </div>
  )
}
