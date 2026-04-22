/**
*Name: Sonu Kumari Mahato Panjiyar
*Date: April 21, 2026
*Description: Calls use items and expose all state
*/


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