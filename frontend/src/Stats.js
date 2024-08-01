import React from "react"
import Table from "react-bootstrap/Table"
import "bootstrap-icons/font/bootstrap-icons.css"

function Stats({ lodgings }) {
  const {
    most_frequent_stay: {
      name: mostFrequentName,
      stay_count: mostFrequentCount,
    } = {},
    longest_stay: {
      name: longestStayName,
      duration_days: longestDurationDays,
    } = {},
    most_expensive_stay: {
      name: mostExpensiveName,
      price_per_night: mostExpensivePrice,
    } = {},
    least_expensive_stay: {
      name: leastExpensiveName,
      price_per_night: leastExpensivePrice,
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
              <strong>{mostFrequentName}:</strong> {mostFrequentCount} stays
            </td>
            <td>
              <strong>{longestStayName}:</strong> {longestDurationDays} days
            </td>
            <td>
              <strong>{mostExpensiveName}:</strong> ${mostExpensivePrice} per
              night
            </td>
            <td>
              {" "}
              <strong>{leastExpensiveName}:</strong> ${leastExpensivePrice} per
              night
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default Stats