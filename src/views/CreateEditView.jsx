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

  // Controls success banner shown briefly before redirecting to list
  const [saved, setSaved] = useState(false)

// Alert warning editing a car id that does not exist in items array
  if (isEdit && !existing) {
    return (
      <div className="alert alert-warning">
        Car not found.{' '}
        <span
          className="text-decoration-underline"
          style={{ cursor: 'pointer' }}
          onClick={() => navigate('/list')}
        >
          Back to list
        </span>
      </div>
    )
  }

  function handleSave(data) {
    if (isEdit) {
      // updateItem new added car into existing car ,keeping the same id
      ctx.updateItem(id, data)
    } else {
      // addItem generates a new id automatically inside useItems
      ctx.addItem(data)
    }
    setSaved(true)
    // 1 second delay lets user read success message before redirect fires
    setTimeout(() => navigate('/list'), 1000)
  }

  return (
    <div className="row justify-content-center">
      <div className="col-md-7">
        <h2 className="h5 mb-3">{isEdit ? 'Edit Car' : 'Add New Car'}</h2>

        {/* Success alert appears after save and disappears on redirect */}
        {saved && (
          <div className="alert alert-success mb-3">
            Car {isEdit ? 'updated' : 'added'} successfully! Redirecting...
          </div>
        )}

        {/* Pass existing car as initial so edit mode pre-fills all fields */}
        <ItemForm
          initial={existing}
          onSave={handleSave}
          onCancel={() => navigate(-1)}
        />
      </div>
    </div>
  )
}
