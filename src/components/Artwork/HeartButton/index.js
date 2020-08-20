import React from "react"
import Jumbotron from "react-bootstrap/Jumbotron"
import Button from "react-bootstrap/Button"
import { useDispatch } from "react-redux"
import { addHeart } from "../../../store/artworkDetails/actions"
import { useParams } from "react-router-dom"
import "./style.css"

export default function HeartButton() {
  const dispatch = useDispatch()
  const id = useParams().id

  function heartPlusOne() {
    dispatch(addHeart(id))
  }

  return (
    <div className="heartbtn" onClick={heartPlusOne}>
      ♡
    </div>
  )
}
