import React, { useState } from "react"
import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import "bootstrap-icons/font/bootstrap-icons.css"

const initialValue = {
  title: null,
  start_date: null,
  end_date: null,
  location_id: null,
}

function CreateNewTripPage({ setTrips, locations, onAddNewTrip }) {
  const [formData, setFormData] = useState(initialValue)

  const resetForm = () => setFormData(initialValue)

  const handleChange = ({ target: { name, value } }) => {
    setFormData({ ...formData, [name]: value })
  }

  const handleDateChange = (date, name) => {
    setFormData({ ...formData, [name]: date })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onAddNewTrip(formData)
  }

  function onAddNewTrip(newTrip) {
    fetch("http://localhost:9292/trips", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTrip),
    })
      .then((response) => response.json())
      .then((trip) => {
        setTrips(trip)
      })
      .then(resetForm)
      .catch((error) => {
        console.error("Error submitting trip:", error)
      })
  }

  return (
    <div className="form-container">
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridLocation">
            <Form.Label>Location:</Form.Label>
            <Form.Select
              name="location_id"
              value={formData.location_id ?? ""}
              onChange={handleChange}
            >
              <option value="">--</option>
              {locations.map((location, index) => (
                <option value={location.id} key={index}>
                  {`${location.country} - ${location.state} - ${location.city}`}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridTripName">
          <Form.Label>Enter Trip Name:</Form.Label>
          <Form.Control
            placeholder="Camping Trip to Utah"
            name="title"
            value={formData.title ?? ""}
            onChange={handleChange}
          />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridStartDate">
            <Form.Label>Start Date:</Form.Label>
            <br></br>
            <DatePicker
              selected={formData.start_date}
              onChange={(date) => handleDateChange(date, "start_date")}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEndDate">
            <Form.Label>End Date:</Form.Label>
            <br></br>
            <DatePicker
              selected={formData.end_date}
              onChange={(date) => handleDateChange(date, "end_date")}
            />{" "}
          </Form.Group>
        </Row>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default CreateNewTripPage
