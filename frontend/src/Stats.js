import React, { useEffect, useState } from "react"
import ListGroup from "react-bootstrap/ListGroup"

function Stats({ lodgings }) {
  const [travelAbroad, setTravelAbroad] = useState([])

  const {
    most_frequent_stay: {
      name: mostFrequentName,
      stay_count: mostFrequentCount,
    } = {},
    longest_stay: { 0: longestStayName, 1: longestDurationDays } = {},
    most_expensive_stay: {
      name: mostExpensiveName,
      price_per_night: mostExpensivePrice,
    } = {},
    least_expensive_stay: {
      name: leastExpensiveName,
      price_per_night: leastExpensivePrice,
    } = {},
  } = lodgings

  useEffect(() => {
    fetch("http://localhost:9292/traveled_abroad")
      .then((r) => r.json())
      .then((travel) => setTravelAbroad(travel))
  }, [])

  return (
    <ListGroup>
      <ListGroup.Item>
        <strong>Most Frequent Stay:</strong> {mostFrequentName},{" "}
        {mostFrequentCount} stays
      </ListGroup.Item>
      <ListGroup.Item>
        <strong>Most Expensive Stay: </strong>
        {mostExpensiveName}, ${mostExpensivePrice} per night
      </ListGroup.Item>
      <ListGroup.Item>
        <strong>Least Expensive Stay: </strong>
        {leastExpensiveName}, ${leastExpensivePrice} per night
      </ListGroup.Item>
      <ListGroup.Item>
        <strong>Longest Stay: </strong>
        {longestStayName}, {longestDurationDays} days
      </ListGroup.Item>
      <ListGroup.Item>
        <strong>Countries Traveled Abroad: </strong>
        {travelAbroad.toString(" ")}
      </ListGroup.Item>
    </ListGroup>
  )
}

export default Stats
