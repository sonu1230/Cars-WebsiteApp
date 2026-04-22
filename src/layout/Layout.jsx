import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

export default function Layout(){
//Using location gives current pathname so active nav link can be highlighted
  const {pathname} = useLocation()

  //If the path matches current routes return dark button otherwise return outline button
  function navClass(path){
    return 'btn btn-sm ' + (pathname === path ? 'btn-dark' : 'btn-outline-secondary')

  } 
  return (
    <div className="container py-3">
      <header className="d-flex justify-content-between align-items-center mb-3">
        //Brand Link navigates home on click
        <h1 className="h4 m-0">CarVault</h1>
        <nav className="d-flex gap-2">
          <Link className="btn btn-sm btn-outline-secondary" to="/">Home</Link>
          <Link className="btn btn-sm btn-outline-secondary" to="/list">List</Link>
          <Link className="btn btn-sm btn-primary" to="/new">Create</Link>
        </nav>
      </header>
      <Outlet />
    </div>
  )
}
