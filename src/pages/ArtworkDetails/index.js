import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import Artwork from "../../components/Artwork"
import Bids from "../../components/Bids"
import Jumbotron from "react-bootstrap/Jumbotron"
//import StoryCarousel from "../../components/StoryCarousel"
//import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import { fetchArtworkById } from "../../store/artworkDetails/actions"
import { selectArtworkDetails } from "../../store/artworkDetails/selectors"

export default function ArtworkDetails() {
  const { id } = useParams()
  const artwork = useSelector(selectArtworkDetails)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchArtworkById(id))
  }, [dispatch, id])

  //console.log(artwork.user && artwork.user.name)

  return (
    <>
      <Jumbotron>
        <h1>{artwork.title}</h1>
        <p>Task created by: {artwork.user && artwork.user.name}</p>
      </Jumbotron>

      <Artwork bids={artwork.bids && artwork.bids.length} title={artwork.title} pic={artwork.imageUrl} showHeartBtn={true} heart={artwork.heart} showLink={false} />
      <div>
        <Bids bids={artwork.bids} />
      </div>
    </>
  )
}
