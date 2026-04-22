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

// Returns an object of field errors where empty object means form is valid
function validate(data) {
  const e = {}
  if (!data.name.trim())
    e.name = 'Name is required.'
  if (!data.category)
    e.category = 'Category is required.'
  if (!data.year)
    e.year = 'Year is required.'
  else if (Number(data.year) < 1885 || Number(data.year) > 2025)
    e.year = 'Year must be between 1885 and 2025.'
  if (!data.hp)
    e.hp = 'Horsepower is required.'
  else if (Number(data.hp) < 1 || Number(data.hp) > 2000)
    e.hp = 'HP must be between 1 and 2000.'
  if (!data.price)
    e.price = 'Price is required.'
  else if (Number(data.price) < 0)
    e.price = 'Price must be a positive number.'
  return e
  }

  // Update one field giving instantly immediate feedback fro errors
  function handleChange(e) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }
// Show inline error and error user fills the forms
   function handleBlur(e) {
    const { name } = e.target
    const errs = validate(form)
    if (errs[name]) setErrors(prev => ({ ...prev, [name]: errs[name] }))
  }
  function onSubmit(e){
    e.preventDefault()
      /* validate + save */ }
    const errs = validate(form)
    // Show all errors at once if user tries to submit with empty fields
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
// Convert string inputs to numbers before saving
    onSave({
      ...form,
      year:  Number(form.year),
      hp:    Number(form.hp),
      price: Number(form.price)
    })
  }
    

  return (
    <form className="row g-3" onSubmit={onSubmit} noValidate>
      {/* TODO: name/title (required) */}
      <div className="col-12">
        <label className="form-label fw-bold">Car Name *</label>
        <input
          className={`form-control ${errors.name ? 'is-invalid' : ''}`}
          name="name"
          value={form.name}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="e.g. Porsche 911 GT3"
        />
        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
      </div>
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
