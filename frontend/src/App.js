import "./App.css"
import React, { useEffect, useState } from "react"
import Sidebar from "./sidebar"
import MyTripsPage from "./MyTripsPage"
import CreateNewTripPage from "./CreateNewTripPage"
import "bootstrap-icons/font/bootstrap-icons.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  const [trips, setTrips] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/trips")
      .then((r) => r.json())
      .then((trips) => setTrips(trips))
  }, [])

  return (
    <Router>
      <div className="App">
        <Sidebar>
          <Routes>
            <Route path="/trips" element={<MyTripsPage trips={trips} />} />
            <Route path="/create_new_trip" element={<CreateNewTripPage />} />
          </Routes>
        </Sidebar>
      </div>
    </Router>
  )
}

export default App
