import React from "react"
import { Form, Button, Row, Col } from "react-bootstrap"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

function UpdateTrip({ setTrips, updateTrip, setFormData, onUpdateTrip }) {
  var formData = updateTrip

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleDateChange = (name, date) => {
    setFormData((prevData) => ({ ...prevData, [name]: date }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const submitData = {
      ...formData,
    }

    fetch(`http://localhost:9292/trips/${updateTrip.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submitData),
    })
      .then((response) => response.json())
      .then(() => {
        fetchTrips()
      })
      .catch((error) => {
        console.error("Error updating trip:", error)
      })
  }

  const fetchTrips = () => {
    fetch("http://localhost:9292/trips")
      .then((response) => response.json())
      .then((trips) => {
        setTrips(trips)
      })
  }

  return (
    <div className="form-container">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formGridTripName">
          <Form.Label>Edit Trip Name:</Form.Label>
          <Form.Control
            placeholder="Camping Trip to Utah"
            name="title"
            value={formData.title}
            onChange={(event) => handleChange(event)}
          />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridStartDate">
            <Form.Label>Edit Start Date:</Form.Label>
            <br />
            <DatePicker
              name="start_date"
              selected={formData.start_date}
              onChange={(date) => handleDateChange("start_date", date)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEndDate">
            <Form.Label>Edit End Date:</Form.Label>
            <br />
            <DatePicker
              name="end_date"
              selected={formData.end_date}
              onChange={(date) => handleDateChange("end_date", date)}
            />
          </Form.Group>
        </Row>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default UpdateTrip
