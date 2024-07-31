import React from "react"
import Table from "react-bootstrap/Table"
import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import "bootstrap-icons/font/bootstrap-icons.css"

function ActivitiesPage({ activities, trips }) {
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
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridTrip">
              <Form.Label>Select Trip: </Form.Label>
              <Form.Select>
                <option value="">Trip</option>
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
            <Form.Control />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridPrice">
            <Form.Label>Price: </Form.Label>
            <Form.Control />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridDate">
              <Form.Label>Date: </Form.Label>
              <br></br>
              <DatePicker />
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
