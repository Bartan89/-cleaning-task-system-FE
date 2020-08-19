import React, { useState, useEffect } from "react"
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import Preview from "../../components/Artwork"
import { useDispatch } from "react-redux"
import { postAuction } from "../../store/artworks/actions"
import Axios from "axios"

export default function AuctionForm() {
  const dispatch = useDispatch()
  const [form, setForm] = useState({ title: "", img: "", minAmount: null, fetching: false })

  function randomTitle() {
    async function fetchRandom() {
      try {
        setForm({ ...form, fetching: true })
        const randomName = await Axios.get("https://cors-anywhere.herokuapp.com/http://names.drycodes.com/1")

        setForm({ ...form, title: randomName.data[0].split("_").join(" "), fetching: false })
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchRandom()
  }

  console.log(form)
  function submitForm(event) {
    event.preventDefault()

    dispatch(postAuction(form))
  }
  return (
    <div>
      <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
        <h1 className="mt-5 mb-5">Edit your page</h1>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control value={form.fetching ? "Loading..." : form.title} onChange={e => setForm({ ...form, title: e.target.value })} type="text" placeholder="Provide a title" required />
        </Form.Group>

        <Button variant="primary" type="button" onClick={randomTitle}>
          Random title
        </Button>

        <Form.Group>
          <Form.Label>Image url:</Form.Label>
          <Form.Control value={form.img} onChange={e => setForm({ ...form, img: e.target.value })} type="text" placeholder="past URL here" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Minimal price in EUR:</Form.Label>
          <Form.Control value={form.minAmount} onChange={e => setForm({ ...form, minAmount: e.target.value })} type="number" />
        </Form.Group>

        <Form.Group className="mt-5">
          <Button variant="primary" type="submit" onClick={submitForm}>
            Save changes
          </Button>
        </Form.Group>
      </Form>

      <Preview title={form.title === "" ? "Your title here" : form.title} pic={form.img.length < 5 ? "https://i.pinimg.com/originals/44/fc/f9/44fcf94c9757d6fe2ef2514a58da49d3.jpg" : form.img} />
    </div>
  )
}
