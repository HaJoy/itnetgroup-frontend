import React from 'react'
import { Link } from 'react-router-dom'

export const Error = () => {
  return (
    <div>
        <h1 className="text-3xl font-bold underline text-center">404</h1>
        <h2 className="text-2xl font-bold text-center">Page not found</h2>
        <p className="text-lg text-center">The page you are looking for does not exist.</p>
        <button className="btn btn-primary mt-4"><Link to="/">Go to Dashboard</Link></button>
    </div>
  )
}
