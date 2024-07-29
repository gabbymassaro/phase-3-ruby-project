import React from "react"
import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import "bootstrap-icons/font/bootstrap-icons.css"

function CreateNewTripPage({ locations }) {
  return (
    <div className="form-container">
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCountry">
            <Form.Label>Country</Form.Label>
            <Form.Select>
              <option value="">US</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Select>
              <option value="">State</option>
              {locations.map((location) => (
                <option value={location.state} key={location.id}>
                  {location.state}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Select>
              <option value="">City</option>
              {locations.map((location) => (
                <option value={location.city} key={location.id}>
                  {location.city}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridTripName">
          <Form.Label>Enter Trip Name:</Form.Label>
          <Form.Control placeholder="Camping Trip to Utah" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control placeholder="Apartment, studio, or floor" />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Country</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State/Province</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>City</Form.Label>
            <Form.Control />
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
