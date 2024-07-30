import React from "react"
import TripForm from "./TripForm"

function CreateNewTripPage({ locations, onAddNewTrip, formData, setFormData }) {
  const handleChange = ({ target: { name, value } }) => {
    setFormData({ ...formData, [name]: value })
  }

  const handleDateChange = (date, name) => {
    setFormData({ ...formData, [name]: date })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const submitData = {
      ...formData,
      start_date: formData.start_date
        ? formData.start_date.toISOString().split("T")[0]
        : "",
      end_date: formData.end_date
        ? formData.end_date.toISOString().split("T")[0]
        : "",
    }

    fetch("http://localhost:9292/trips", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submitData),
    })
      .then((response) => response.json())
      .then((trip) => {
        onAddNewTrip(trip)
      })
      .catch((error) => {
        console.error("Error submitting trip:", error)
      })
  }

  return (
    <TripForm
      locations={locations}
      handleSubmit={handleSubmit}
      handleDateChange={handleDateChange}
      handleChange={handleChange}
      formData={formData}
    />
  )
}

export default CreateNewTripPage
