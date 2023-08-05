import React from 'react'
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <div style={{ marginLeft: '15px' }}>
      <h4>Version 1.0.0</h4>
      <Link style={{ color: 'black', textAlign: 'center' }} to='/'>
        Go back
      </Link>
    </div>
  )
}

export default About
