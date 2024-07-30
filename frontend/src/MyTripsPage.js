import React, { useState } from "react"
import Table from "react-bootstrap/Table"
import "bootstrap-icons/font/bootstrap-icons.css"
import TripForm from "./TripForm"

function MyTripsPage({ trips, locations, onEditTrip }) {
  const [formData, setFormData] = useState({
    location_id: "",
    title: "",
    start_date: null,
    end_date: null,
  })
  const [editMode, setEditMode] = useState(false)
  const [currentTripId, setCurrentTripId] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()

    const submitData = {
      ...formData,
      start_date: formData.start_date
        ? formData.start_date.toISOString().split("T")[0]
        : "",
      end_date: formData.end_date
        ? formData.end_date.toISOString().split("T")[0]
        : "",
    }

    fetch(`http://localhost:9292/trips/${currentTripId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submitData),
    })
      .then((response) => response.json())
      .then((trip) => {
        onEditTrip(trip)
      })
      .catch((error) => {
        console.error("Error submitting trip:", error)
      })
  }

  const handleDateChange = (date, field) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: date,
    }))
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleEdit = (trip) => {
    setFormData({
      location_id: trip.location_id,
      title: trip.title,
      start_date: trip.start_date,
      end_date: trip.end_date,
    })
    setEditMode(true)
    setCurrentTripId(trip.id)
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
                  <button
                    className="btn btn-primary"
                    onClick={() => handleEdit(trip)}
                  >
                    Update
                  </button>
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
        exitMode={editMode}
      />
    </>
  )
}

export default MyTripsPage
