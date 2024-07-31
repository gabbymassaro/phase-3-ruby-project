import React from "react"
import Table from "react-bootstrap/Table"
import "bootstrap-icons/font/bootstrap-icons.css"

function ActivitiesPage({ activities }) {
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
    </>
  )
}

export default ActivitiesPage
