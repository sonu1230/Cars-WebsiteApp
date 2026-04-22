import React, { useContext } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { ItemsContext } from '../context/ItemsContext'

export default function DetailView(){
  const { id } = useParams()
  const navigate = useNavigate()
  const ctx = useContext(ItemsContext)

  // useParams returns strings so id is always a string and matches string ids in items
  const item = ctx.items.find(c => c.id === id)

  // Showing fallback message  when URL id does not match any car in the list
  if (!item) {
    return (
      <div className="text-center py-5">
        <div className="alert alert-warning d-inline-block">Car not found.</div>
        <br />
        <Link to="/list" className="btn btn-dark mt-3">← Back to List</Link>
      </div>
    )
  }

  function handleDelete() {
    // control or confirm giving dialog on acceidental permanent deleteion.
    if (window.confirm(`Delete ${item.name}?`)) {
      ctx.deleteItem(item.id)
      // Navigate to list after delete 
      navigate('/list')
    }
  }
  return (
    <div>
      <div className="mb-3"><Link className="btn btn-sm btn-outline-secondary" to="/list">← Back to list</Link></div>
      <div className="alert alert-secondary">TODO: DetailView for id: {id}</div>
    </div>
  )
}
