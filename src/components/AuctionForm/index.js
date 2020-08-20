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

export default function AuctionForm() {
  const message = useSelector(selectMessage)

  const dispatch = useDispatch()
  const [form, setForm] = useState({
    title: null,
    imageUrl: null,
    minimumBid: 200,
    fetching: false,
    validate: { title: "", imageUrl: "" }
  })

  function randomTitle() {
    async function fetchRandom() {
      try {
        setForm({
          ...form,
          fetching: true
        })
        const randomName = await Axios.get("https://cors-anywhere.herokuapp.com/http://names.drycodes.com/1")

        setForm({
          ...form,
          title: randomName.data[0].split("_").join(" "),
          fetching: false
        })
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchRandom()
  }

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

  return (
    <div>
      <Form
        as={Col}
        md={{
          span: 6,
          offset: 3
        }}
        className="mt-5"
      >
        <h1 className="mt-5 mb-5">Post one of your artworks to start reveiving orders:</h1>
        <Form.Group>
          <Form.Label>Title</Form.Label>
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

        <Button variant="primary" type="button" onClick={randomTitle}>
          Random title
        </Button>

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
            placeholder="past URL here"
          />
        </Form.Group>
        <p>{form.validate.imageUrl}</p>
        <Form.Group>
          <Form.Label>Minimal price in EUR:</Form.Label>
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
      <Preview title={form.title === "" ? "Your title here" : form.title} pic={!form.imageUrl ? "https://i.pinimg.com/originals/44/fc/f9/44fcf94c9757d6fe2ef2514a58da49d3.jpg" : form.imageUrl}></Preview>
    </div>
  )
}
