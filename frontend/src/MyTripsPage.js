import React, { useState } from "react"
import DeleteTrip from "./DeleteTrip"
import UpdateTrip from "./UpdateTrip"

import Table from "react-bootstrap/Table"
import "bootstrap-icons/font/bootstrap-icons.css"

const initialValue = {
  title: "",
  start_date: null,
  end_date: null,
}

function MyTripsPage({ trips, onDeleteTrip, onUpdateTrip }) {
  const [formData, setFormData] = useState(initialValue)

  const handleOnClick = (trip) => {
    setFormData(trip)
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
                    onClick={() => handleOnClick(trip)}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <DeleteTrip onDeleteTrip={onDeleteTrip} trip={trip} />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <UpdateTrip
        updateTrip={formData}
        setFormData={setFormData}
        onUpdateTrip={onUpdateTrip}
      />
    </>
  )
}

export default MyTripsPage
