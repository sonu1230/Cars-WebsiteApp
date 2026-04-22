import React from 'react'
import { Link } from 'react-router-dom'
import { useItemsContext } from '../context/ItemsContext'

export default function HomeView(){
  //Reading live car count from context
  const { items } = useItemsContext()

  return (
    <div className="p-4 bg-light rounded">
      <h2 className="h5">CarVault</h2>
      <p className="mb-0">Your personal car collection manager. Browse, add, edit and track your favourite cars.</p>
      <div className="d-flex gap-2">
        {/* items.length is live, reflects current localStorage data */}
        <Link to="/list" className="btn btn-dark">
          Browse {items.length} Cars
        </Link>
        <Link to="/new" className="btn btn-outline-dark">
          + Add New Car
        </Link>
       </div>
    </div>
  )
}
