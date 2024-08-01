import React, { useState } from "react"
import Table from "react-bootstrap/Table"
import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import "bootstrap-icons/font/bootstrap-icons.css"

const initialValue = {
  name: null,
  price: null,
  date: null,
  trip_id: null,
}

function ActivitiesPage({
  activities,
  setActivities,
  trips,
  onAddNewActivity,
}) {
  const [formData, setFormData] = useState(initialValue)

  const handleChange = ({ target: { name, value } }) => {
    setFormData({ ...formData, [name]: value })
  }

  const handleDateChange = (date, name) => {
    setFormData({ ...formData, [name]: date })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onAddNewActivity(formData)
  }

  function onAddNewActivity(newActivity) {
    fetch("http://localhost:9292/activities", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newActivity),
    })
      .then((response) => response.json())
      .then((sortedActivity) => {
        setActivities(sortedActivity)
      })
      .catch((error) => {
        console.error("Error submitting activity:", error)
      })
  }

  return (
    <>
      <div className="tripstable">
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Activity</th>
              <th>Price</th>
              <th>Date</th>
              <th>Trip</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity, index) => (
              <tr key={index}>
                <td>{activity.name}</td>
                <td>${activity.price}</td>
                <td>{activity.date}</td>
                <td>{activity.trip.title}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div className="form-container">
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridTrip">
              <Form.Label>Select Trip: </Form.Label>
              <Form.Select
                name="trip_id"
                value={formData.trip_id ?? ""}
                onChange={handleChange}
              >
                <option value="">--</option>
                {trips.map((trip, index) => (
                  <option value={trip.id} key={index}>
                    {`${trip.title}`}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridNewActivity">
            <Form.Label>Enter New Activity: </Form.Label>
            <Form.Control
              placeholder="Opera House"
              name="name"
              value={formData.name ?? ""}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridPrice">
            <Form.Label>Price: </Form.Label>
            <Form.Control
              placeholder="19.99"
              name="price"
              value={formData.price ?? ""}
              onChange={handleChange}
            />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridDate">
              <Form.Label>Date: </Form.Label>
              <br></br>
              <DatePicker
                selected={formData.date}
                onChange={(date) => handleDateChange(date, "date")}
              />
            </Form.Group>
          </Row>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  )
}

export default ActivitiesPage
