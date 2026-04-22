import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ItemForm from '../components/ItemForm'
import { ItemsContext } from '../context/ItemsContext'

export default function CreateEditView(){
  const { id } = useParams()
  const navigate = useNavigate()
  const ctx = useContext(ItemsContext)
  // initial if editing; onSave add/update then navigate

  //If id exists in URL which one is editing otherwise creating
  const isEdit   = Boolean(id)
  const existing = isEdit ? ctx.items.find(c => c.id === id) : null


  return (
    <div>
      <h2 className="h5 mb-3">{id ? 'Edit Item' : 'Add Item'}</h2>
      <ItemForm /* initial={{}} onSave={(data)=>{}} onCancel={()=>navigate(-1)} */ />
    </div>
  )
}
