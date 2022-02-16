import React, { Suspense } from 'react';
import { BrowserRouter as Router, Swirch, Route, Link } from 'react-router-dom'

const Routes = () => {
  return (
    <Router>
      <Link to="/">
        <h1>oi</h1>
      </Link>
    </Router>
  )
}

export default Routes;