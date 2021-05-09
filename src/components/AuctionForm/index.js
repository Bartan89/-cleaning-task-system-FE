import React, { useState, useEffect } from "react"
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import Preview from "../../components/Artwork"
import { useDispatch } from "react-redux"
import { postAuction } from "../../store/artworks/actions"
import Axios from "axios"
import { selectMessage } from "../../store/appState/selectors"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import {images} from "./images"
import "./style.css"

export default function AuctionForm() {
  const message = useSelector(selectMessage)

  const dispatch = useDispatch()
  const [form, setForm] = useState({
    title: null,
    imageUrl: null,
    minimumBid: 10,
    fetching: false,
    validate: { title: "", imageUrl: "" }
  })

  

  console.log(form)
  function submitForm(event) {
    event.preventDefault()
    if (!form.title) {
      setForm({ ...form, validate: { ...form.validate, title: "provide title please..." } })
    }
    if (!form.imageUrl) {
      setForm({ ...form, validate: { ...form.validate, imageUrl: "provide image URL please..." } })
    } else {
      dispatch(postAuction(form))
    }

    
  }
  

  function handleThumbnail(chosenImg){
    setForm({...form, imageUrl : chosenImg})
  }
  return (
    <div>
      <div>
        <Form
          as={Col}
          md={{
            span: 6,
            offset: 3
          }}
          className="mt-5"
        >
          <h3 className="mt-5 mb-5">Provide a task for the house to perform:</h3>
          <Form.Group>
            <Form.Label>Short description</Form.Label>
            <Form.Control
              value={form.fetching ? "Loading..." : form.title}
              onChange={(e) =>
                setForm({
                  ...form,
                  title: e.target.value
                })
              }
              type="text"
              placeholder="Provide a title"
              required
            />
          </Form.Group>
          <p>{form.validate.title}</p>

      

          <Form.Group>
            <Form.Label>Image url:</Form.Label>
            <Form.Control
              value={form.img}
              onChange={(e) =>
                setForm({
                  ...form,
                  imageUrl: e.target.value
                })
              }
              type="text"
              value={form.imageUrl}
              placeholder="Pick a image below or paste on yourself"
              
             
           
            />
          </Form.Group>
          <div className="imageWrapper">
              {images.map(img => {
                return <><img onClick={() => handleThumbnail(img.link)} className="thumbnailImg" src={img.link} alt="" /></>
              })}
          </div>
          

          <p>{form.validate.imageUrl}</p>
          <Form.Group>
            <Form.Label>How many credits for this task?</Form.Label>
            <Form.Control
              value={form.minimumBid}
              onChange={(e) =>
                setForm({
                  ...form,
                  minimumBid: e.target.value
                })
              }
              type="number"
              />
          </Form.Group>
              <p><i>Pick an amount that is reasonable. Per month the aim is to fulfill 200 credits per person</i></p>

          {message !== null ? (
            <>
              <p>{message.message}</p>
              <Link to={`artworks/${message.id}`}>Find it here</Link>
            </>
          ) : (
            ""
          )}
          <Form.Group className="mt-5">
            <Button variant="primary" type="submit" onClick={submitForm}>
              Send!
            </Button>
          </Form.Group>
        </Form>
      </div>
    </div>
  )
}
