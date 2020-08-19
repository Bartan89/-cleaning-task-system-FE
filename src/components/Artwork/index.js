import React from "react"
import Jumbotron from "react-bootstrap/Jumbotron"
import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom"

import HeartButton from "./HeartButton"

export default function Artwork(props) {
  return (
    <Jumbotron
      style={{
        backgroundColor: props.backgroundColor,
        color: props.color
      }}
    >
      <h1>{props.title}</h1>
      <img src={props.pic} alt="" />
      <p>{props.description}</p>
      <p>{props.heart} x ♡</p>
      <p>
        {props.bids} {props.bids === 1 ? "bid" : "bids"}
      </p>
      {props.showLink ? (
        <Link to={`/artworks/${props.id}`}>
          <Button>Learn more</Button>
        </Link>
      ) : null}
      {props.showHeartBtn ? <HeartButton /> : null}
    </Jumbotron>
  )
}
