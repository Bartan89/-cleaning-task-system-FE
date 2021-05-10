import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Jumbotron from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container"
import { fetchArtworks } from "../../store/artworks/actions"
import { fetchUsersAndTheirNames } from "../../store/users/actions"
import { selectArtworks } from "../../store/artworks/selectors"
import Artwork from "../../components/Artwork"
import { selectUsers } from "../../store/users/selectors"
import "./style.css"

export default function Artworks() {
  const dispatch = useDispatch()
  const Artworks = useSelector(selectArtworks)
  const Users = useSelector(selectUsers)

  //console.log("Artworks -> Artworks", Artworks)

  useEffect(() => {
    dispatch(fetchArtworks())
    dispatch(fetchUsersAndTheirNames())
  }, [dispatch])

  return (
    <>
    <br />
    <h5>Make sure you <span className="king">reach 200 credits</span> at the end of this month</h5>
    <div className="cardWrapper">
      {Users.map((user, i) => {
        return (
          <div className="card">
         
          <h6 className="name">{user.name} {i === 0 ? <span className="king">♛</span> : ''}</h6>

          <h6>Credit: {user.credit}</h6>
      <div>
  </div>
</div>)})}
        </div>
<br />

      <Jumbotron>
        <h1>Tasks to do:</h1>
      </Jumbotron>
      <div className="artworkContainer">
        {Artworks.map((e, i) => {
          return <Artwork key={i} title={e.title} pic={e.imageUrl} cost={e.minimumBid} heart={e.heart} bids={e.bids.length} showLink={true} id={e.id} taskTakenUpBy={e.bids[0]}/>
        })}
      </div>
    </>
  )
}
