import "./App.css"
import React, { useEffect, useState } from "react"
import Sidebar from "./sidebar"
import MyTripsPage from "./MyTripsPage"
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
  const [formData, setFormData] = useState(initialValue)

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
                  onAddNewTrip={onAddNewTrip}
                  formData={formData}
                  setFormData={setFormData}
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
