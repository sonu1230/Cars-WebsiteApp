/**
*Name: Sonu Kumari Mahato Panjiyar
*Date: April 21, 2026
*Description: Renders when no route matches and show 404 fallback page
*/



import React from 'react'
import { Link } from 'react-router-dom'

// Function to show the error if the page is not found, route doesnot exist and returning home.
export default function NotFound() {
  return (
    <div className="text-center py-5">
      <h2>404 – Page Not Found</h2>
      <p className="text-muted">That route does not exist.</p>
      <Link to="/" className="btn btn-dark mt-3"> Go Home</Link>
    </div>
  )
}