import React from "react"
import "bootstrap-icons/font/bootstrap-icons.css"

function MyTripsPage({ trips }) {
  // return <div>hi</div>

  return (
    <div className="tripstable">
      <table>
        <tr>
          <th>Title</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Locations</th>
          <th>Activities</th>
          <th>Lodging</th>
        </tr>
        {trips.map((trip, index) => (
          <tr key={index}>
            <td>{trip.title}</td>
            <td>{trip.start_date}</td>
            <td>{trip.end_date}</td>
            <td>{trip.location_id}</td>
            <td>{trip.activity_id}</td>
            <td>{trip.lodging_id}</td>
          </tr>
        ))}
      </table>
    </div>
  )
}

export default MyTripsPage
