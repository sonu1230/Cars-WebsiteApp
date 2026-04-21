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

// Safe parse to contoll corrupted localStorage data never crashes the app
function safeLoad() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    // Return prase data if data exists otherwise go to default items
    return raw ? JSON.parse(raw) : defaultItems
  } catch {
    return defaultItems
  }
}

export default function useItems(){
  const [items, setItems] = useState([])
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('')
  const [sortKey, setSortKey] = useState('name')
  const [sortDir, setSortDir] = useState('asc')
  const [minValue, setMinValue] = useState('')
  const [maxValue, setMaxValue] = useState('')

  // TODO: load from localStorage on mount

  //persist to localStorage when items change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items])
// Add new car-Date.now()  generates a unique string id
  function addItem(data ){

    setItems(prev => [...prev, { ...data, id: String(Date.now()) }])

   }
   // Update existing car-map replaces only the car with matching id
  function updateItem(id, patch){ 
    setItems(prev => prev.map(c => c.id === id ? { ...c, ...patch } : c))

   }
   //Delete Car - filter returns new array without removed car
  function deleteItem(id){
     setItems(prev => prev.filter(c => c.id !== id))

   }

  // Build unique sorted category list from current items
  const categories = useMemo([...new Set(items.map(c => c.category))].sort(), [items])

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
