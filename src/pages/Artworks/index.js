import React, { useEffect, useState } from "react"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import Jumbotron from "react-bootstrap/Jumbotron"
import { useDispatch, useSelector } from "react-redux"
import Artwork from "../../components/Artwork"
import { fetchArtworks } from "../../store/artworks/actions"
import { selectArtworks, selectArtworksThatAreDone } from "../../store/artworks/selectors"
import { fetchUsersAndTheirNames } from "../../store/users/actions"
import { selectUsers, selectUsersAndOneDefault } from "../../store/users/selectors"
import "./style.css"

export default function Artworks() {
  const dispatch = useDispatch()
  const Artworks = useSelector(selectArtworks)
  

  const [artWorkState, setArtWorkState] = useState(null)

  const ArtworksThatAreDone = useSelector(selectArtworksThatAreDone(artWorkState));

  const Users = useSelector(selectUsers)
  const UsersAndDefault = useSelector(selectUsersAndOneDefault)

  //console.log("Artworks -> Artworks", Artworks)

  const handleFilter = (event) => {
    setArtWorkState(event.target.value)
  }

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


    <div style={{padding : "2vw"}}>

      <Form>
        <h1 className="mt-5 mb-5">Who did what:</h1>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Filter on name</Form.Label>
          <select style={{width: "200px"}} onChange={handleFilter} class="form-control" id="sel1">
          {UsersAndDefault.map((user, i) => <option>{user.name}</option>)}
          </select>
        </Form.Group>


        <Form.Group className="mt-5">

        </Form.Group>

      </Form>

       
      <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Whom</th>
      <th scope="col">What</th>
      <th scope="col">When</th>
      <th scope="col">Credits</th>
    </tr>
  </thead>
  <tbody>
    {ArtworksThatAreDone.map((e, i) => {
      return (
        <tr>
          <th scope="row">{i}</th>
          <td>{e.bids[0].email}</td>
          <td>{e.title}</td>
          <td>{e.bids[0].createdAt.replace('T', ' ').split(':')[0] + ':' + e.bids[0].createdAt.replace('T', ' ').split(':')[1]}</td>
          <td>{e.bids[0].amount}</td>
        </tr>
      )
    })}
  </tbody>
</table>
    </div>

  
    </>

    
  )
}
