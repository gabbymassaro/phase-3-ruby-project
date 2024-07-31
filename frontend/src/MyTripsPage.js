import React, { useState } from "react"
import Table from "react-bootstrap/Table"
import { toDate } from "date-fns-tz"
import moment from "moment"
import "bootstrap-icons/font/bootstrap-icons.css"
import TripForm from "./TripForm"

function MyTripsPage({ trips, locations, onEditTrip, onDeleteTrip }) {
  /* I have been trying to fix a bug, this doesn't fix it but it's the most recent thing I've tried.
     The bug: if I consolelog my formData, the start_date and end_date are correct. The datepicker
     however, will display the incorrect start_date and end_date. The datepicker is displaying
     one day behind the respective dates. It's mostly described online as a timezone issue but I haven't
     been able to solve it. At the moment, it's just a visual problem in this app, not a data issue.
  */
  const dateTimeRegex =
    /^([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)(-(0[1-9]|1[0-2])(-(0[1-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9](:([0-5][0-9]|60))?(\.[0-9]{1,9})?)?)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)?)?)?$/

  function parseDateString(dateString) {
    if (dateTimeRegex.test(dateString)) {
      return toDate(dateString)
    }
    return new Date(dateString)
  }

  const handleDateChange = (date, field) => {
    const parsedDate = parseDateString(date)
    if (parsedDate) {
      const utcDate = moment(parsedDate).utc().format("YYYY-MM-DD")
      setFormData((prevData) => ({
        ...prevData,
        [field]: utcDate,
      }))
    }
  }
  /* end of buggy code */

  const [formData, setFormData] = useState({
    location_id: "",
    title: "",
    start_date: null,
    end_date: null,
  })
  const [editMode, setEditMode] = useState(false)
  const [currentTripId, setCurrentTripId] = useState(null)

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

  const handleSubmit = (event) => {
    event.preventDefault()

    const submitData = {
      ...formData,
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

  const handleDelete = (id) => {
    fetch(`http://localhost:9292/trips/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        onDeleteTrip(id)
      })
  }
  console.log(formData)
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
              <th>Total Cost of Stay</th>
              <th>Total Cost of Activities</th>
              <th>Length of Trip</th>
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
                <td>${trip.total_cost_of_stay}</td>
                <td>${trip.total_activities_cost}</td>
                <td>{trip.length_of_trip} days</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleEdit(trip)}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(trip.id)}
                  >
                    Remove
                  </button>
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
