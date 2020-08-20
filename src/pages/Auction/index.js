import React from "react"
import Jumbotron from "react-bootstrap/Jumbotron"
import AuctionForm from "../../components/AuctionForm"

export default function Auction() {
  return (
    <>
      <Jumbotron>
        <h1>Start an Auction</h1>
      </Jumbotron>

      <AuctionForm />
    </>
  )
}
