import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <header className="classic-menu">
  <div id="header-container">
    {/* Logo */}
    <div id="logo" className="hide-ball">
      <Link to="/" className="ajax-link" data-type="page-transition">
        <img className="black-logo" src="static/images/logo.png" alt="ClaPat Logo" />
        <img className="white-logo" src="static/images/logo-white.png" alt="ClaPat Logo" />
      </Link>
    </div>
    {/*/Logo */}
    {/* Navigation */}
    <nav>
      <div class="nav-height">
        <div class="outer">
          <div class="inner">
            <ul data-breakpoint={1025} className="flexnav">
            <li className="link menu-timeline"><Link  to="/home" className="ajax-link" data-type="page-transition"><span data-hover="Works">Works</span></Link></li>
            <li className="link menu-timeline"><Link to="/about" className="ajax-link" data-type="page-transition" ><span data-hover="About">About</span></Link></li>
            <li className="link menu-timeline"><Link to="/contact" className="ajax-link" data-type="page-transition" ><span data-hover="Contact">Contact</span></Link></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    {/*/Navigation */}
    {/* Menu Burger */}
    <div id="burger-wrapper" className="parallax-wrap">
      <div id="menu-burger" className="parallax-element">
        <span />
        <span />
      </div>
    </div>
    {/*/Menu Burger */}
  </div>
</header>
  // <div
  //   style={{
  //     background: 'white',
  //     marginBottom: '1.45rem',
  //   }}
  // >
  //   <div
  //     style={{
  //       margin: '0 auto',
  //       // maxWidth: 960,
  //       padding: '1.45rem 1.0875rem',
  //     }}>
  //     <nav>
  //       <ul className="flexnav">
  //         <li className="link menu-timeline"> <Link
  //           to="/"
  //           style={{
  //             textDecoration: 'none',
  //           }}
  //         >
  //           {siteTitle}
  //         </Link></li>
  //         <li className="link menu-timeline"><Link to="/home">Home</Link></li>
  //         <li className="link menu-timeline"><Link to="/about">about</Link></li>
  //         <li className="link menu-timeline"><Link to="/contact">contact</Link></li>
  //       </ul>
  //     </nav>
  //   </div>
  // </div>
)

export default Header
