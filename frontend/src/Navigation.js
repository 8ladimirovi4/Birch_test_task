import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <div>
      <nav>
        <div style={{height:80, backgroundColor:'lightgrey'}}>
            <Link to="/">Main</Link> {' '}
            <Link to="/petlist">PetList</Link>{' '}

        </div>
        </nav>
    </div>
  )
}

export default Navigation
