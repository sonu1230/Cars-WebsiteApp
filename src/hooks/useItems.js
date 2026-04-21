import { useEffect, useMemo, useState } from 'react'
const STORAGE_KEY = 'a4_items'

//Default cars shown on first visit before user adds any data
const defaultItems = [
  { id: '1', name: 'Mustang GT',    category: 'Muscle',   year: 1968, hp: 390,  price: 45000,   description: 'Classic American muscle icon.' },
  { id: '2', name: 'Supra MK4',     category: 'Sports',   year: 1993, hp: 320,  price: 60000,   description: 'Legendary Japanese sports car.' },
  { id: '3', name: 'Countach',      category: 'Supercar', year: 1974, hp: 375,  price: 500000,  description: 'Lamborghini icon of the 70s.' },
  { id: '4', name: 'Model S Plaid', category: 'EV',       year: 2021, hp: 1020, price: 90000,   description: 'Fastest production EV sedan.' },
  { id: '5', name: 'Chiron',        category: 'Hypercar', year: 2016, hp: 1500, price: 3000000, description: 'Bugatti ultimate hypercar.' },
  { id: '6', name: 'Carrera GT',    category: 'Supercar', year: 2004, hp: 612,  price: 700000,  description: 'Porsche naturally aspirated V10.' },
  { id: '7', name: 'NSX',           category: 'Sports',   year: 1990, hp: 270,  price: 55000,   description: 'Honda everyday supercar.' },
  { id: '8', name: 'Aventador',     category: 'Supercar', year: 2011, hp: 700,  price: 400000,  description: 'Lamborghini V12 flagship.' },
]


export default function useItems(){
  const [items, setItems] = useState([])
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('')
  const [sortKey, setSortKey] = useState('name')
  const [sortDir, setSortDir] = useState('asc')
  const [minValue, setMinValue] = useState('')
  const [maxValue, setMaxValue] = useState('')

  // TODO: load from localStorage on mount

  // TODO: persist to localStorage when items change

  function addItem(/* data */){ /* TODO */ }
  function updateItem(/* id, patch */){ /* TODO */ }
  function deleteItem(/* id */){ /* TODO */ }

  // const categories = useMemo(() => { /* TODO */ }, [items])

  const derived = useMemo(() => {
    // TODO: apply search, category, min/max and sort
    return items
  }, [items, search, category, minValue, maxValue, sortKey, sortDir])

  return {
    items, setItems,
    search, setSearch,
    category, setCategory,
    sortKey, setSortKey,
    sortDir, setSortDir,
    minValue, setMinValue,
    maxValue, setMaxValue,
    categories: [],
    derived,
    addItem, updateItem, deleteItem
  }
}
