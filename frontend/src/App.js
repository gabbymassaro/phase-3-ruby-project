import "./App.css"
import React, { useEffect, useState } from "react"
import Sidebar from "./Sidebar"
import Stats from "./Stats"
import WelcomePage from "./WelcomePage"
import MyTripsPage from "./MyTripsPage"
import ActivitiesPage from "./ActivitiesPage"
import CreateNewTripPage from "./CreateNewTripPage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  const [trips, setTrips] = useState([])
  const [locations, setLocations] = useState([])
  const [lodgings, setLodgings] = useState([])
  const [activities, setActivities] = useState([])

  function onNewTrip(trip) {
    setTrips([...trips, trip])
  }

  function onNewActivity(newActivity) {
    setActivities((prevActivities) => [...prevActivities, newActivity])
  }

  function onDeleteTrip(id) {
    setTrips(trips.filter((trip) => trip.id !== id))
  }

  useEffect(() => {
    fetch("http://localhost:9292/trips")
      .then((r) => r.json())
      .then((trips) => setTrips(trips))
    fetch("http://localhost:9292/locations")
      .then((r) => r.json())
      .then((locations) => setLocations(locations))
    fetch("http://localhost:9292/activities")
      .then((r) => r.json())
      .then((activities) => setActivities(activities))
    fetch("http://localhost:9292/lodgings")
      .then((r) => r.json())
      .then((lodgings) => setLodgings(lodgings))
  }, [])

  function fetchTrips() {
    fetch("http://localhost:9292/trips")
      .then((r) => r.json())
      .then((trips) => setTrips(trips))
  }

  function fetchActivities() {
    fetch("http://localhost:9292/activities")
      .then((r) => r.json())
      .then((activities) => setActivities(activities))
  }

  return (
    <Router>
      <div className="App">
        <Sidebar>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route
              path="/trips"
              element={
                <MyTripsPage
                  trips={trips}
                  setTrips={setTrips}
                  fetchActivities={fetchActivities}
                  onDeleteTrip={onDeleteTrip}
                />
              }
            />
            <Route
              path="/locations"
              element={
                <CreateNewTripPage
                  setTrips={setTrips}
                  locations={locations}
                  onAddNewTrip={onNewTrip}
                />
              }
            />
            <Route
              path="/activities"
              element={
                <ActivitiesPage
                  fetchTrips={fetchTrips}
                  setActivities={setActivities}
                  activities={activities}
                  trips={trips}
                  onAddNewActivity={onNewActivity}
                />
              }
            />
            <Route
              path="/stats"
              element={
                <Stats
                  lodgings={lodgings}
                  locations={locations}
                  trips={trips}
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
