import React from "react"
import "bootstrap-icons/font/bootstrap-icons.css"

function MyTripsPage({ trips }) {
  return (
    <div className="tripstable">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>City</th>
            <th>Activities</th>
            <th>Lodging</th>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default MyTripsPage
