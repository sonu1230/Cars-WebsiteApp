import React, { createContext, useContext } from 'react'
import useItems from '../hooks/useItems'


export const ItemsContext = createContext(null)

export function ItemsProvider({ children }) {
  // initialize state and handlers (consider a custom useItems hook)

  const value = useItems()
   
  return <ItemsContext.Provider value={value}>{children}</ItemsContext.Provider>
}
 //UseContext(ItemsContext) directly in everye view component
export function useItemsContext() {
  return useContext(ItemsContext)
}