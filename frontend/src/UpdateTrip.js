import React, { useState, useEffect } from "react"
import { Form, Button, Row, Col } from "react-bootstrap"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

function UpdateTrip({ trip }) {
  const [title, setTitle] = useState("")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")

  useEffect(() => {
    getTripDetails()
  }, [])

  const updateTrip = async () => {
    console.warn(title, startDate, endDate)
  }

  return (
    <div className="form-container">
      <Form>
        <Form.Group className="mb-3" controlId="formGridTripName">
          <Form.Label>Edit Trip Name:</Form.Label>
          <Form.Control
            placeholder="Camping Trip to Utah"
            name="title"
            value={title}
          />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridStartDate">
            <Form.Label>Edit Start Date:</Form.Label>
            <br />
            <DatePicker selected={startDate} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEndDate">
            <Form.Label>Edit End Date:</Form.Label>
            <br />
            <DatePicker selected={endDate} />
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

/*

*/
