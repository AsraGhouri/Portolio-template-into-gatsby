import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'white',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        // maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}>
      <nav>
        <ul className="flexnav">
          <li className="link menu-timeline"> <Link
            to="/"
            style={{
              textDecoration: 'none',
            }}
          >
            {siteTitle}
          </Link></li>
          <li className="link menu-timeline"><Link to="/home">Home</Link></li>
          <li className="link menu-timeline"><Link to="/about">about</Link></li>
          <li className="link menu-timeline"><Link to="/contact">contact</Link></li>
        </ul>
      </nav>
    </div>
  </div>
)

export default Header
