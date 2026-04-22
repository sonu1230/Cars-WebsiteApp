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
      <div className="row justify-content-center">
        <div className="col-md-7">
          <div className="card shadow">
            {/* Dark header showing car name and category badge side by side */}
            <div className="card-header bg-dark text-white d-flex justify-content-between align-items-center">
              <h3 className="mb-0">{item.name}</h3>
              <span className="badge bg-secondary">{item.category}</span>
            </div>
            <div className="card-body">
              {/* Making Bordered table to make specs easy to read*/}
              <table className="table table-bordered mb-3">
                <tbody>
                  <tr><th>Category</th><td>{item.category}</td></tr>
                  <tr><th>Year</th><td>{item.year}</td></tr>
                  <tr><th>Horsepower</th><td>{item.hp} hp</td></tr>
                  <tr><th>Price</th><td>${item.price.toLocaleString()}</td></tr>
                  <tr><th>Description</th><td>{item.description || '—'}</td></tr>
                </tbody>
              </table>


         </div>
        </div>
      </div>
    </div>
  )
}
