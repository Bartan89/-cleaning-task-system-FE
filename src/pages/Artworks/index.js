import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Jumbotron from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container"
import { fetchArtworks } from "../../store/artworks/actions"
import { selectArtworks } from "../../store/artworks/selectors"
import Artwork from "../../components/Artwork"
import "./style.css"

export default function Artworks() {
  const dispatch = useDispatch()
  const Artworks = useSelector(selectArtworks)

  //console.log("Artworks -> Artworks", Artworks)

  useEffect(() => {
    dispatch(fetchArtworks())
  }, [dispatch])

  return (
    <>
      <Jumbotron>
        <h1>Artworks</h1>
      </Jumbotron>
      <div className="artworkContainer">
        {Artworks.map((e, i) => {
          return <Artwork key={i} title={e.title} pic={e.imageUrl} heart={e.heart} bids={e.bids.length} showLink={true} id={e.id} />
        })}
      </div>
    </>
  )
}
