import "./App.css"
import React, { useEffect, useState } from "react"
import Sidebar from "./Sidebar"
import Calendar from "./Calendar"
import MyTripsPage from "./MyTripsPage"
import ActivitiesPage from "./ActivitiesPage"
import CreateNewTripPage from "./CreateNewTripPage"
import "bootstrap-icons/font/bootstrap-icons.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  const [trips, setTrips] = useState([])
  const [locations, setLocations] = useState([])
  const [activities, setActivities] = useState([])

  function onAddNewTrip(trip) {
    setTrips([...trips, trip])
  }

  function onAddNewActivity(newActivity) {
    setActivities((prevActivities) => [...prevActivities, newActivity])
    setTrips((prevTrips) =>
      prevTrips.map((trip) =>
        trip.id === newActivity.trip_id
          ? {
              ...trip,
              activities: [...trip.activities, newActivity],
            }
          : trip
      )
    )
  }

  function onUpdateTrip(updatedTrip) {
    setTrips((prevTrips) =>
      prevTrips.map((trip) => (trip.id === updatedTrip.id ? updatedTrip : trip))
    )
    setActivities((prevActivities) =>
      prevActivities.map((activity) =>
        activity.trip_id === updatedTrip.id
          ? {
              ...activity,
              trip: updatedTrip,
            }
          : activity
      )
    )
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
                  onDeleteTrip={onDeleteTrip}
                  onUpdateTrip={onUpdateTrip}
                />
              }
            />
            <Route
              path="/locations"
              element={
                <CreateNewTripPage
                  locations={locations}
                  onAddNewTrip={onAddNewTrip}
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
            <Route path="/calendar" element={<Calendar />} />
          </Routes>
        </Sidebar>
      </div>
    </Router>
  )
}

export default App
