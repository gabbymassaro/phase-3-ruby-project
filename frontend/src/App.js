import "./App.css"
import React, { useEffect, useState } from "react"
import Sidebar from "./Sidebar"
import Stats from "./Stats"
import MyTripsPage from "./MyTripsPage"
import ActivitiesPage from "./ActivitiesPage"
import CreateNewTripPage from "./CreateNewTripPage"
import "bootstrap-icons/font/bootstrap-icons.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  const [trips, setTrips] = useState([])
  const [locations, setLocations] = useState([])
  const [lodgings, setLodgings] = useState([])
  const [activities, setActivities] = useState([])

  // console.log("this is trips:", trips)
  // console.log("this is locations:", locations)
  // console.log("this is lodgings:", lodgings)
  // console.log("this is activities:", activities)

  function onNewTrip(trip) {
    setTrips([...trips, trip])
  }

  function onNewActivity(newActivity) {
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
    fetch("http://localhost:9292/lodgings")
      .then((r) => r.json())
      .then((lodgings) => setLodgings(lodgings))
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
                  setTrips={setTrips}
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
