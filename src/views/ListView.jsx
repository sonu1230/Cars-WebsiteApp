import React, { useContext } from 'react'
import ItemCard from '../components/ItemCard'
import { ItemsContext } from '../context/ItemsContext'

export default function ListView(){
  const ctx = useContext(ItemsContext)
   // use ctx.derived and filters
  const {
    derived,
    search,   setSearch,
    category, setCategory,
    sortKey,  setSortKey,
    sortDir,  setSortDir,
    minValue, setMinValue,
    maxValue, setMaxValue,
    categories
  } = ctx 

  // Resetting all filters so user can start fresh without manually clearing each one
  function clearFilters() {
    setSearch('')
    setCategory('')
    setMinValue('')
    setMaxValue('')
  }

  return (
    <div>
       <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>
          All Cars{' '}
          {/* Result count updates live as filters change */}
          <span className="text-muted fs-6">({derived.length} results)</span>
        </h2>
        <Link to="/new" className="btn btn-dark">+ Add Car</Link>
      </div>
      {/* search */}
      <div className="row g-2 align-items-end mb-4">

        {/* Search by name  */}
        <div className="col-md-3">
          <label className="form-label small mb-1">Search</label>
          <input
            className="form-control"
            placeholder="Search by name..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        {/* category filter */}
        <div className="col-md-3">
          <label className="form-label small mb-1">Category</label>
          <select
            className="form-select"
            value={category}
            onChange={e => setCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            {categories.map(c => <option key={c}>{c}</option>)}
          </select>
        </div>

        {/* TODO: min/max */}
        {/* TODO: sort key/dir */}
      </div>

      {/* TODO: empty state */}

      <div className="row g-3">
        {/* TODO: map ctx.derived to ItemCard */}
        <div className="col-12"><div className="alert alert-info">TODO: derived list</div></div>
      </div>
    </div>
  )
}
