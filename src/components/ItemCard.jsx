/**
*Name: Sonu Kumari Mahato Panjiyar
*Date: April 21, 2026
*Description: Display cars field, color category and view edit delete action button for each car.
*/


import React from 'react'
import { Link } from 'react-router-dom'
import { useItemsContext } from '../context/ItemsContext'

//Maps category nae to Bootstrap badge color class so each car type has a visaully distinct label
const badgeColor = {
  Muscle:   'danger',
  Sports:   'primary',
  Supercar: 'warning',
  Hypercar: 'dark',
  EV:       'success',
  GT:       'info',
  Hybrid:   'secondary'
}

export default function ItemCard({ item }){
  //Pull delete item action from context
  const {deleteItem} = useItemsContext()

  //window.comfirm prevents accential deletion by requiring user confirmation
   function handleDelete() {
    if (window.confirm(`Delete ${item.name}?`)) {
      deleteItem(item.id)
    }
  }
  return (
    <div className="card h-100">
      <div className="card-body">
         {/* Card title links to detail page so user can click name to see full specs */}
        <h5 className="card-title">
          <Link to={`/item/${item.id}`} className="text-decoration-none">
            {item.name}
          </Link>
        </h5>
        <p className="card-text mb-1"><strong>Category:</strong> {item.category}</p>
        <p className="card-text mb-1"><strong>Year:</strong> {item.year}</p>
        <p className="card-text mb-1"><strong>HP:</strong> {item.hp}</p>
        <p className="card-text mb-2">
          <strong>Price:</strong> ${item.price.toLocaleString()}
        </p>
        {/* Falls back to secondary if category not in badgeColor map */}
        <span className={`badge text-bg-${badgeColor[item.category] || 'secondary'}`}>
          {item.category}
        </span>
      </div>
      <div className="card-footer d-flex justify-content-end gap-2">
        <Link className="btn btn-sm btn-outline-primary" to={`/item/${item.id}`}>View</Link>
        <Link className="btn btn-sm btn-outline-secondary" to={`/edit/${item.id}`}>Edit</Link>
        {/* Delete button triggers confirmation before removing car from list */}
        <button className="btn btn-sm btn-outline-danger" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  )
}
