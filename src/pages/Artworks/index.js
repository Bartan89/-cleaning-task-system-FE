import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Jumbotron from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container"
import { fetchArtworks } from "../../store/artworks/actions"
import { selectArtworks } from "../../store/artworks/selectors"
import Artwork from "../../components/Artwork"

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
      <Container>
        {Artworks.map((e, i) => {
          return <Artwork key={i} title={e.title} pic={e.imageUrl} heart={e.heart} bids={e.bids.length} showLink={true} id={e.id} />
        })}

        {/* {Artworks.map(homepage => {
          return (
            <div></div>
            //   <Homepage
            //     key={homepage.id}
            //     id={homepage.id}
            //     title={homepage.title}
            //     description={homepage.description}
            //     backgroundColor={homepage.backgroundColor}
            //     color={homepage.color}
            //     showLink={true}
            //   />
          )
        })} */}
      </Container>
    </>
  )
}
