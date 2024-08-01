import React from "react"
import Table from "react-bootstrap/Table"
import "bootstrap-icons/font/bootstrap-icons.css"

function Stats({ lodgings }) {
  const {
    most_frequent_stay: {
      name: mostFrequentName,
      stay_count: mostFrequentCount,
    } = {},
  } = lodgings
  return (
    <div className="tripstable">
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Most Frequent Stay</th>
            <th>Longest Stay</th>
            <th>Most Expensive Stay</th>
            <th>Least Expensive Stay</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {mostFrequentName}, {mostFrequentCount} stays
            </td>
            <td>la</td>
            <td>la</td>
            <td>la</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default Stats
