import "./App.css"
import React, { useEffect, useState } from "react"
import Sidebar from "./sidebar"
import MyTripsPage from "./MyTripsPage"
import CreateNewTripPage from "./CreateNewTripPage"
import "bootstrap-icons/font/bootstrap-icons.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  const [trips, setTrips] = useState([])
  const [locations, setLocations] = useState([])
  const [activities, setActivities] = useState([])
  const [lodgings, setLodgings] = useState([])

  function onAddNewTrip(trip) {
    setTrips([...trips, trip])
  }

  useEffect(() => {
    fetch("http://localhost:9292/trips")
      .then((r) => r.json())
      .then((trips) => setTrips(trips))
  }, [])

  useEffect(() => {
    fetch("http://localhost:9292/locations")
      .then((r) => r.json())
      .then((locations) => setLocations(locations))
  }, [])

  useEffect(() => {
    fetch("http://localhost:9292/activities")
      .then((r) => r.json())
      .then((activities) => setActivities(activities))
  }, [])

  useEffect(() => {
    fetch("http://localhost:9292/lodgings")
      .then((r) => r.json())
      .then((lodgings) => setLodgings(lodgings))
  }, [])

  return (
    <Router>
      <div className="App">
        <Sidebar>
          <Routes>
            <Route path="/trips" element={<MyTripsPage trips={trips} />} />
            <Route
              path="/locations"
              element={
                <CreateNewTripPage
                  locations={locations}
                  activities={activities}
                  lodgings={lodgings}
                  onAddNewTrip={onAddNewTrip}
                />
              }
            />
          </Routes>
        </Sidebar>
      </div>
    </Router>
  )
}

export default App
