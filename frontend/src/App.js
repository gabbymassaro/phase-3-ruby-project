import "./App.css"
import React, { useEffect, useState } from "react"
import Sidebar from "./Sidebar"
import MyTripsPage from "./MyTripsPage"
import ActivitiesPage from "./ActivitiesPage"
import CreateNewTripPage from "./CreateNewTripPage"
import "bootstrap-icons/font/bootstrap-icons.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

const initialValue = {
  title: null,
  start_date: null,
  end_date: null,
  location_id: null,
}

function App() {
  const [trips, setTrips] = useState([])
  const [locations, setLocations] = useState([])
  const [activities, setActivities] = useState([])
  const [formData, setFormData] = useState(initialValue)

  function onAddNewTrip(trip) {
    setTrips([...trips, trip])
  }

  function onAddNewActivity(activity) {
    setActivities([...activities, activity])
  }

  function onEditTrip(trip) {
    setTrips([...trips, trip])
  }

  function onDeleteTrip(id) {
    setTrips(trips.filter((trip) => trip.id !== id))
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

  return (
    <Router>
      <div className="App">
        <Sidebar>
          <Routes>
            <Route
              path="/trips"
              element={
                <MyTripsPage
                  trips={trips}
                  locations={locations}
                  onEditTrip={onEditTrip}
                  onDeleteTrip={onDeleteTrip}
                />
              }
            />
            <Route
              path="/locations"
              element={
                <CreateNewTripPage
                  locations={locations}
                  onAddNewTrip={onAddNewTrip}
                  formData={formData}
                  setFormData={setFormData}
                />
              }
            />
            <Route
              path="/activities"
              element={
                <ActivitiesPage
                  activities={activities}
                  trips={trips}
                  onAddNewActivity={onAddNewActivity}
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
