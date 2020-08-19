import React from "react"
import Jumbotron from "react-bootstrap/Jumbotron"
import Preview from "../../components/Artwork"
import AuctionForm from "../../components/AuctionForm"

export default function Auction() {
  return (
    <>
      <Jumbotron>
        <h1>Start an Auction</h1>
      </Jumbotron>
      <h1>hello</h1>
      <AuctionForm />
      <h1>Preview:</h1>
      <Preview />
    </>
  )
}
