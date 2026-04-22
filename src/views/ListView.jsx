import React, { useContext } from 'react'
import ItemCard from '../components/ItemCard'
import { ItemsContext } from '../context/ItemsContext'
import { Link } from 'react-router-dom'

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

        {/* min/max */}
        {/*Minimum Horse Power*/}
         <div className="col-md-2">
          <label className="form-label small mb-1">Min HP</label>
          <input
            className="form-control"
            type="number"
            placeholder="e.g. 300"
            value={minValue}
            onChange={e => setMinValue(e.target.value)}
          />
        </div>

        {/* Max Price: shows only cars priced at or below this value */}
        <div className="col-md-2">
          <label className="form-label small mb-1">Max Price $</label>
          <input
            className="form-control"
            type="number"
            placeholder="e.g. 100000"
            value={maxValue}
            onChange={e => setMaxValue(e.target.value)}
          />
        </div>


         {/* Sort key:controls which field the derived list sorts by */}
        <div className="col-md-1">
          <label className="form-label small mb-1">Sort</label>
          <select
            className="form-select"
            value={sortKey}
            onChange={e => setSortKey(e.target.value)}
          >
            <option value="name">Name</option>
            <option value="year">Year</option>
            <option value="hp">HP</option>
            <option value="price">Price</option>
          </select>
        </div>
      </div>
       {/* Direction toggle: flips between ascending and descending on each click */}
       <div className="col-md-1">
          <label className="form-label small mb-1">Dir</label>
          <button
            className="btn btn-outline-dark w-100"
            onClick={() => setSortDir(d => d === 'asc' ? 'desc' : 'asc')}
          >
            {sortDir === 'asc' ? '↑' : '↓'}
          </button>
        </div>

      

      {/* Empty state */}
      {derived.length === 0 && (
        <div className="text-center py-5 text-muted">
          <p>No cars match your search or filters.</p>
          <button className="btn btn-outline-dark" onClick={clearFilters}>
            Clear Filters
          </button>
        </div>
      )}

      <div className="row g-3">
        {derived.map(item => (
          <div className="col-sm-6 col-lg-4" key={item.id}>
            <ItemCard item={item} />
          </div>
        ))}
    </div>
    </div>
  )
}
