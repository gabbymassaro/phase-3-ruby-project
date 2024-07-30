import React, { useState } from "react"
import Table from "react-bootstrap/Table"
import "bootstrap-icons/font/bootstrap-icons.css"
import TripForm from "./TripForm"
function MyTripsPage({ trips }) {
  const [formData, setFormData] = useState({
    location_id: "",
    title: "",
    start_date: null,
    end_date: null,
  })

  const locations = [
    { id: 1, country: "USA", state: "CA", city: "San Francisco" },
  ]

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const handleDateChange = (date, field) => {
    setFormData((prevData) => ({ ...prevData, [field]: date }))
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  return (
    <>
      <div className="tripstable">
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Trip</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>City</th>
              <th>Activities</th>
              <th>Lodging</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {trips.map((trip, index) => (
              <tr key={index}>
                <td>{trip.title}</td>
                <td>{trip.start_date}</td>
                <td>{trip.end_date}</td>
                <td>{trip.location.city}</td>
                <td>
                  {trip.activities.map((activity, idx) => (
                    <span key={idx}>
                      {activity.name}
                      {idx < trip.activities.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </td>
                <td>
                  {trip.lodgings.map((lodging, idx) => (
                    <span key={idx}>
                      {lodging.name}
                      {idx < trip.lodgings.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </td>
                <td>
                  <button className="btn btn-primary">Update</button>
                </td>
                <td>
                  <button className="btn btn-danger">Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <TripForm
        locations={locations}
        handleSubmit={handleSubmit}
        handleDateChange={handleDateChange}
        handleChange={handleChange}
        formData={formData}
      />
    </>
  )
}

export default MyTripsPage
