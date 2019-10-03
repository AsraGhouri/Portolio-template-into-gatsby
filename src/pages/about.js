import React from 'react'
// import '../styles/global.css'
import Helmet from 'react-helmet'
import Link from "gatsby-link"
class About extends React.Component {
  componentDidMount() {
    window.addEventListener('load', PageLoad(), FirstLoad(), ContactForm());
  }
  render() {
    return (

      <div>
        <main style={{ width: '100%' }}>
          <div className="cd-index cd-main-content">
            {/* Page Content */}
            <div id="page-content">
              {/* Content Scroll */}
              <div id="content-scroll">
                {/* Main */}
                <div id="main">
                  {/* Hero Section */}
                  <div id="hero" className>
                    <div id="hero-styles" className="parallax-onscroll">
                      <div id="hero-caption">
                        <div className="inner text-align-center">
                          <div className="hero-subtitle">Creative Studio Design</div>
                          <div className="hero-title">
                            <span>A</span>
                            <span>B</span>
                            <span>O</span>
                            <span>U</span>
                            <span>T</span>
                            <span> </span>
                            <span>U</span>
                            <span>S</span>
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
                      {/* Row */}
                      <div className="vc_row small row_padding_top row_padding_bottom text-align-center">
                        <div className="container">
                          <h2 className="has-mask" data-delay={10}>We cover a large range of creative digital projects, platforms, and campaigns to create experiences.</h2>
                        </div>
                      </div>
                      {/*/Row */}
                      {/* Row */}
                      <div className="vc_row row_padding_bottom text-align-center">
                        <div className="container">
                          <h4 className="has-animation" data-delay={100}>Our clients:</h4>
                          <p className="has-animation" data-delay={150}>Proudly served some of the most famous brands:</p>
                          <hr />
                          {/* Clients Table */}
                          <ul className="clients-table has-animation" data-delay={10}>
                            <li className="link has-animation" data-delay={150}><img src="static/images/client-01.png" alt="client" /></li>
                            <li className="link has-animation" data-delay={200}><img src="static/images/client-02.png" alt="client" /></li>
                            <li className="link has-animation" data-delay={250}><img src="static/images/client-03.png" alt="client" /></li>
                            <li className="link has-animation" data-delay={300}><img src="static/images/client-04.png" alt="client" /></li>
                            <li className="link has-animation" data-delay={150}><img src="static/images/client-05.png" alt="client" /></li>
                            <li className="link has-animation" data-delay={200}><img src="static/images/client-06.png" alt="client" /></li>
                            <li className="link has-animation" data-delay={250}><img src="static/images/client-07.png" alt="client" /></li>
                            <li className="link has-animation" data-delay={300}><img src="static/images/client-08.png" alt="client" /></li>
                          </ul>
                          {/*/Clients Table */}
                        </div>
                      </div>
                      {/*/Row */}
                      {/* Row */}
                      <div className="vc_row small text-align-center">
                        <div className="container">
                          <h3 className="has-mask" data-delay={100}>What people are saying about us</h3>
                          <hr />
                          <div className="text-carousel has-animation" data-delay={150}>
                            <div className="text-carousel-item">
                              <p>"These guys are amazing. I really like this theme and the customer support is just amazing. <br className="destroy" />Thank you for all of your support."</p>                                    		<div className="user-review">Sultan0254 - Themeforest</div>
                            </div>
                            <div className="text-carousel-item">
                              <p>"The design is beautiful, elegant and minimal. The customer service was amazing, asked for a <br className="destroy" />404 page and they provided me one free of charge. "</p>
                              <div className="user-review">Rmbettencourt - Themeforest</div>
                            </div>
                            <div className="text-carousel-item">
                              <p>"Maestro is one of my favorite theme and I bought quite a few from ThemeForest"</p>
                              <div className="user-review">Oratorio - Themeforest</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*/Row */}
                      {/* Row */}
                      <div className="vc_row small row_padding_top text-align-center">
                        <div className="container">
                          <h2 className="has-mask" data-delay={10}>Whatever your needs, we're looking forward to hearing from you</h2>
                          <hr />
                        </div>
                      </div>
                      {/*/Row */}
                    </div>
                  </div>
                  {/*/Main Content */}
                </div>
                {/*/Main */}
              </div>
              {/*/Content Scroll */}
            </div>
            {/*/Page Content */}
          </div>
        </main>
      </div>
    );
  }
}
export default About;