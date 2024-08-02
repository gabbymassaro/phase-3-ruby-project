import React from "react"

function DeleteTrip({ onDeleteTrip, trip }) {
  const { id } = trip

  const handleDelete = () => {
    fetch(`http://localhost:9292/trips/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        onDeleteTrip(id)
      })
  }
  return (
    <button className="btn btn-danger" onClick={handleDelete}>
      Remove
    </button>
  )
}

export default DeleteTrip
