import React from 'react'
import Header from '../components/header';
import { Link } from "gatsby-link"
class Home extends React.Component {
  componentDidMount(){
    window.addEventListener('load', PageLoad(), FirstLoad(), Portfolio(),
    Sliders(),
    Showcase(),
    ShowcaseCarousel(),
    LargeShowcaseCarousel(),
    AjaxLoad(),
    BackToTop(),
    JustifiedGrid(),
    Lightbox(),
    ContactForm(),
    PlayVideo(),
    ContactMap());
  }
  render() {
    return (
      <div>
        <main style={{    width: '100%'}}>
          {/* Preloader */}
          {/* <div className="preloader-wrap">
            <div className="outer">
              <div className="inner">
                <div className="percentage" id="precent" />
                <div className="trackbar">
                  <div className="loadbar" />
                </div>
                <div className="headphones" />
                <div className="headphones-text">Turn up the volume for the<br />best experience</div>
              </div>
            </div>
          </div> */}
          {/*/Preloader */}
          <div className="cd-index cd-main-content">
            {/* Page Content */}
            <div id="page-content">
              {/* Header */}
              <header className="classic-menu">
                <div id="header-container">
                  {/* Logo */}
                  <div id="logo" className="hide-ball">
                    {/* <Link className="ajax-link" data-type="page-transition" to="/">
                      <img className="black-logo" src="static/images/logo.png" alt="ClaPat Logo" />
                      <img className="white-logo" src="static/images/logo-white.png" alt="ClaPat Logo" />
                    </Link> */}
                  </div>
                  {/*/Logo */}
                  {/* Navigation */}
                  <nav>
                    <div class="nav-height">
                      <div class="outer">
                        <div class="inner">
                          {/* <ul data-breakpoint={1025} className="flexnav">
                          <li className="link menu-timeline"><Link  to="/home" className="ajax-link" data-type="page-transition"><span data-hover="Works">Works</span></Link></li>
                          <li className="link menu-timeline"><Link to="/about" className="ajax-link" data-type="page-transition" ><span data-hover="About">About</span></Link></li>
                          <li className="link menu-timeline"><Link to="/contact" className="ajax-link" data-type="page-transition" ><span data-hover="Contact">Contact</span></Link></li>
                          </ul> */}
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
              {/*/Header */}
              {/* Sidebar Overlay */}
              <div id="sidebar-overlay">
                <div id="close-sidebar" />
                <div className="outer">
                  <div className="inner">
                    <ul id="filters">
                      <li className="sidebar-timeline link"><a id="all" href="#" data-filter="*" data-hover="ALL" className="active ">ALL</a></li>
                      <li className="sidebar-timeline link"><a href="#" data-filter=".photo" data-hover="PHOTO" className>PHOTO</a></li>
                      <li className="sidebar-timeline link"><a href="#" data-filter=".architecture" data-hover="ARCHITECTURE" className>ARCHITECTURE</a></li>
                      <li className="sidebar-timeline link"><a href="#" data-filter=".design" data-hover="DESIGN" className>DESIGN</a></li>
                      <li className="sidebar-timeline link"><a href="#" data-filter=".video" data-hover="VIDEO" className>VIDEO</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Sidebar Overlay */}
              {/* Content Scroll */}
              <div id="content-scroll">
                {/* Main */}
                <div id="main">
                  {/* Hero Section */}
                  <div id="hero">
                    <div id="hero-styles" className="parallax-onscroll">
                      <div id="hero-caption">
                        <div className="inner text-align-center">
                          <div className="hero-subtitle">Our best works</div>
                          <div className="hero-title">
                            <span>P</span>
                            <span>O</span>
                            <span>R</span>
                            <span>T</span>
                            <span>F</span>
                            <span>O</span>
                            <span>L</span>
                            <span>I</span>
                            <span>O</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*/Hero Section */}
                  {/* Main Content */}
                  <div id="main-content">
                    {/* Main Page Content */}
                    <div id="main-page-content">
                      <div id="show-filters" className="button-box has-animation" data-delay={100}>
                        <div className="clapat-button-wrap parallax-wrap hide-ball">
                          <div className="clapat-button parallax-element">
                            <div className="button-border rounded outline parallax-element-second"><span data-hover="Show">Filters</span></div>
                          </div>
                        </div>
                      </div>
                      {/* Portfolio Wrap */}
                      <div id="portfolio-wrap">
                        {/* Portfolio Columns */}
                        <div id="portfolio" className="below-caption are-images-unloaded manual-load">
                          <div className="item photo">
                            <div className="item-appear">
                              <div className="item-content">
                                {/* <Link className="item-wrap ajax-link-project" data-type="page-transition" to={"/project1"} /> */}
                                <div className="item-wrap-image"><div className="item-image" data-src="static/images/01hero.jpg" /></div>
                                <div className="item-caption">
                                  <h2 className="item-title">THE QUEEN</h2>
                                  <h4 className="item-cat"><span data-hover="View Case">Photography</span></h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="item photo">
                            <div className="item-appear">
                              <div className="item-content">
                                <a className="item-wrap ajax-link-project" data-type="page-transition" href="project02.html" />
                                <div className="item-wrap-image"><div className="item-image" data-src="static/images/02hero.jpg" /></div>
                                <div className="item-caption">
                                  <h2 className="item-title">DARK PATH</h2>
                                  <h4 className="item-cat"><span data-hover="View Case">Photography</span></h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="item video">
                            <div className="item-appear">
                              <div className="item-content">
                                <a className="item-wrap ajax-link-project" data-type="page-transition" href="project03.html" />
                                <div className="item-wrap-image"><div className="item-image" data-src="static/images/03hero.jpg">
                                  <div className="hero-video-wrapper">
                                    <video loop muted className="bgvid">
                                      <source src="http://mathematic.tv/wp-content/uploads/2017/05/ELIE_SAAB_40s_LOOP-preview.mp4" type="video/mp4" />
                                      <source src="http://mathematic.tv/wp-content/uploads/2017/05/ELIE_SAAB_40s_LOOP-preview.webm" type="video/webm" />
                                    </video>
                                  </div>
                                </div></div>
                                <div className="item-caption">
                                  <h2 className="item-title">ELIE SAAB</h2>
                                  <h4 className="item-cat"><span data-hover="View Case">Video</span></h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="item design">
                            <div className="item-appear">
                              <div className="item-content">
                                <a className="item-wrap ajax-link-project" data-type="page-transition" href="project04.html" />
                                <div className="item-wrap-image"><div className="item-image" data-src="static/images/04hero.jpg" /></div>
                                <div className="item-caption">
                                  <h2 className="item-title">LADY IN RED</h2>
                                  <h4 className="item-cat"><span data-hover="View Case">Design</span></h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="item design">
                            <div className="item-appear">
                              <div className="item-content">
                                <a className="item-wrap ajax-link-project" data-type="page-transition" href="project05.html" />
                                <div className="item-wrap-image"><div className="item-image" data-src="static/images/05hero.jpg" /></div>
                                <div className="item-caption">
                                  <h2 className="item-title">INFO BUGS</h2>
                                  <h4 className="item-cat"><span data-hover="View Case">Design</span></h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="item photo">
                            <div className="item-appear">
                              <div className="item-content">
                                <a className="item-wrap ajax-link-project" data-type="page-transition" href="project06.html" />
                                <div className="item-wrap-image"><div className="item-image" data-src="static/images/06hero.jpg" /></div>
                                <div className="item-caption">
                                  <h2 className="item-title">NEON DUDE</h2>
                                  <h4 className="item-cat"><span data-hover="View Case">Photography</span></h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="item design">
                            <div className="item-appear">
                              <div className="item-content">
                                <a className="item-wrap ajax-link-project" data-type="page-transition" href="project07.html" />
                                <div className="item-wrap-image"><div className="item-image" data-src="static/images/07hero.jpg" /></div>
                                <div className="item-caption">
                                  <h2 className="item-title">SPORT BLACK</h2>
                                  <h4 className="item-cat"><span data-hover="View Case">Design</span></h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="item photo">
                            <div className="item-appear">
                              <div className="item-content">
                                <a className="item-wrap ajax-link-project" data-type="page-transition" href="project08.html" />
                                <div className="item-wrap-image"><div className="item-image" data-src="static/images/08hero.jpg" /></div>
                                <div className="item-caption">
                                  <h2 className="item-title">WILD HORSE</h2>
                                  <h4 className="item-cat"><span data-hover="View Case">Photography</span></h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="item architecture">
                            <div className="item-appear">
                              <div className="item-content">
                                <a className="item-wrap ajax-link-project" data-type="page-transition" href="project09.html" />
                                <div className="item-wrap-image"><div className="item-image" data-src="static/images/09hero.jpg" /></div>
                                <div className="item-caption">
                                  <h2 className="item-title">FOREST HOUSE</h2>
                                  <h4 className="item-cat"><span data-hover="View Case">Architecture</span></h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="item photo">
                            <div className="item-appear">
                              <div className="item-content">
                                <a className="item-wrap ajax-link-project" data-type="page-transition" href="project10.html" />
                                <div className="item-wrap-image"><div className="item-image" data-src="static/images/10hero.jpg" /></div>
                                <div className="item-caption">
                                  <h2 className="item-title">THUNDER STRIKE</h2>
                                  <h4 className="item-cat"><span data-hover="View Case">Photography</span></h4>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/*/Portfolio */}
                      </div>
                      {/*/Portfolio Wrap */}
                    </div>
                    {/*/Main Page Content */}
                    {/* Project Navigation */}
                    <div id="page-nav">
                      <div className="next-page-wrap">
                        <div className="next-page-title">
                          <div className="inner text-align-center">
                            <div className="page-subtitle has-animation" data-delay={100}>
                              <div className="subtitle-info">Learn More</div>
                              <div className="subtitle-name">Creative Studio Design</div>
                            </div>
                            <a className="page-title has-animation hide-ball next-ajax-link-page" data-type="page-transition" href="about.html" data-delay={150}>
                              <span>A</span>
                              <span>B</span>
                              <span>O</span>
                              <span>U</span>
                              <span>T</span>
                              <span> </span>
                              <span>U</span>
                              <span>S</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*/Project Navigation */}
                  </div>
                  {/*/Main Content */}
                </div>
                {/*/Main */}
                {/* Footer */}
                <footer className="hidden">
                  <div id="footer-container">
                    <div className="button-wrap left">
                      <div className="icon-wrap parallax-wrap">
                        <div className="button-icon parallax-element">
                          <div className="bars">
                            <div className="bar" /><div className="bar" /><div className="bar" /><div className="bar" /><div className="bar" />
                          </div>
                        </div>
                      </div>
                      <div className="button-text"><span data-on="Sound On" data-off="Sound Off">Sound On</span></div>
                    </div>
                    <div className="socials-wrap">
                      <div className="socials-icon"><i className="fa fa-share-alt" aria-hidden="true" /></div>
                      <div className="socials-text">Follow Us</div>
                      <ul className="socials">
                        <li><span className="parallax-wrap"><a className="parallax-element" href="https://www.dribbble.com/clapat" target="_blank">Db</a></span></li>
                        <li><span className="parallax-wrap"><a className="parallax-element" href="https://www.twitter.com/clapatdesign" target="_blank">Tw</a></span></li>
                        <li><span className="parallax-wrap"><a className="parallax-element" href="https://www.behance.com/clapat" target="_blank">Be</a></span></li>
                        <li><span className="parallax-wrap"><a className="parallax-element" href="https://www.facebook.com/clapat.ro" target="_blank">Fb</a></span></li>
                        <li><span className="parallax-wrap"><a className="parallax-element" href="https://www.instagram.com/clapat.themes/">In</a></span></li>
                      </ul>
                    </div>
                  </div>
                </footer>
                {/*/Footer */}
              </div>
              {/*/Content Scroll */}
              <div className="thumb-container">
                <div className="thumb-page" data-src="static/images/01hero.jpg" />
                <div className="thumb-page" data-src="static/images/02hero.jpg" />
                <div className="thumb-page" data-src="static/images/03hero.jpg" />
                <div className="thumb-page" data-src="static/images/04hero.jpg" />
                <div className="thumb-page" data-src="static/images/05hero.jpg" />
                <div className="thumb-page" data-src="static/images/06hero.jpg" />
                <div className="thumb-page" data-src="static/images/07hero.jpg" />
                <div className="thumb-page" data-src="static/images/08hero.jpg" />
                <div className="thumb-page" data-src="static/images/09hero.jpg" />
                <div className="thumb-page" data-src="static/images/10hero.jpg" />
              </div>
            </div>
            {/*/Page Content */}
          </div>
        </main>
        <div className="cd-cover-layer" />
        {/* <div id="magic-cursor">
          <div id="ball">
            <div id="hold-event" />
            <div id="ball-loader" />
          </div>
        </div> */}
        <div id="clone-image" />
        <div id="rotate-device" />
      </div>
    )
  }
}

export default Home
