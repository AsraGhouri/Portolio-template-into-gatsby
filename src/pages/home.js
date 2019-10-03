import React from 'react'
import Header from '../components/header';
import  Link  from "gatsby-link"
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
          {/*/Preloader */}
          <div className="cd-index cd-main-content">
            {/* Page Content */}
            <div id="page-content">
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
                                <Link className="item-wrap ajax-link-project animated bounce delay-2s" data-type="page-transition" to="/project1" >
                                <div className="item-wrap-image"><div className="item-image" data-src="static/images/01hero.jpg" /></div>
                                </Link>
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
                                <Link className="item-wrap ajax-link-project" data-type="page-transition"  to="/project2" >
                                <div className="item-wrap-image"><div className="item-image" data-src="static/images/02hero.jpg" /></div>
                                </Link>
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
                                <Link className="item-wrap ajax-link-project" data-type="page-transition"  to="/project3" >
                                <div className="item-wrap-image"><div className="item-image" data-src="static/images/03hero.jpg">
                                  <div className="hero-video-wrapper">
                                    <video loop muted className="bgvid">
                                      <source src="http://mathematic.tv/wp-content/uploads/2017/05/ELIE_SAAB_40s_LOOP-preview.mp4" type="video/mp4" />
                                      <source src="http://mathematic.tv/wp-content/uploads/2017/05/ELIE_SAAB_40s_LOOP-preview.webm" type="video/webm" />
                                    </video>
                                  </div>
                                </div></div>
                               </Link>
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
                                <Link className="item-wrap ajax-link-project" data-type="page-transition" to="/project4" >
                                <div className="item-wrap-image"><div className="item-image" data-src="static/images/04hero.jpg" /></div>
                                </Link>
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
                                <Link className="item-wrap ajax-link-project" data-type="page-transition" to="/project5" >
                                <div className="item-wrap-image"><div className="item-image" data-src="static/images/05hero.jpg" /></div>
                                </Link>
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
                                <Link className="item-wrap ajax-link-project" data-type="page-transition" to="/project5" >
                                <div className="item-wrap-image"><div className="item-image" data-src="static/images/06hero.jpg" /></div>
                                </Link>
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
                  </div>
                  {/*/Main Content */}
                </div>
                {/*/Main */}
                {/* Footer */}

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
