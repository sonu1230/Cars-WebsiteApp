import React from 'react'

const CATEGORIES = ['Muscle', 'Sports', 'Supercar', 'Hypercar', 'EV', 'GT', 'Hybrid']

//Empty form used when creating a new car
const emptyForm = { name: '', category: '', year: '', hp: '', price: '', description: '' }

export default function ItemForm({ initial, onSave, onCancel }){
  // Initialize from initial to pre-fills existing car data
const [form, setForm]     = useState(initial || emptyForm)
const [errors, setErrors] = useState({})

//Re-sync form state when initial changes so navigating beetween different edit routes
useEffect(() => {
    setForm(initial || emptyForm)
}, [initial])
  function onSubmit(e){ e.preventDefault(); /* TODO: validate + save */ }
  return (
    <form className="row g-3" onSubmit={onSubmit} noValidate>
      {/* TODO: name/title (required) */}
      {/* TODO: category (required) */}
      {/* TODO: numeric fields like price/rating with validation */}
      {/* TODO: description */}
      <div className="col-12 d-flex gap-2">
        <button className="btn btn-primary" type="submit">Save</button>
        {/* TODO: Cancel button in edit mode */}
      </div>
    </form>
  )
}
