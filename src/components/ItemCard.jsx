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

export default function ItemCard(/* { item, onView, onEdit, onDelete } */){
  return (
    <div className="card h-100">
      <div className="card-body">
        {/* TODO: show fields */}
        <div className="text-muted">TODO: ItemCard</div>
      </div>
      <div className="card-footer d-flex justify-content-end gap-2">
        {/* TODO: buttons */}
      </div>
    </div>
  )
}
