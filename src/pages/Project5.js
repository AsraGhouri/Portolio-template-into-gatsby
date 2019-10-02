import React from 'react';

class Project5 extends React.Component{
    render(){
        return(
            <main>		
            {/* Preloader */}
            <div className="preloader-wrap">
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
            </div>
            {/*/Preloader */}     
            <div className="cd-index cd-main-content">
              {/* Page Content */}
              <div id="page-content" className="light-content">
                {/* Header */}
                <header className="classic-menu">
                  <div id="header-container">
                    {/* Logo */}
                    <div id="logo" className="hide-ball">
                      <a className="ajax-link" data-type="page-transition" href="index-2.html">
                      <img className="black-logo" src={require("../../public/static/images/logo.png")} alt="ClaPat Logo" />
                        <img className="white-logo" src={require("../../public/static/images/logo-white.png")} alt="ClaPat Logo" />
                      </a>
                    </div>
                    {/*/Logo */}             
                    {/* Navigation */}
                    <nav> 
                      <div className="nav-height">
                        <div className="outer">
                          <div className="inner">           
                            <ul data-breakpoint={1025} className="flexnav">
                              <li className="link menu-timeline"><a className="ajax-link" data-type="page-transition" href="index.html"><span data-hover="Works">Works</span></a></li>                           
                              <li className="link menu-timeline"><a className="ajax-link" data-type="page-transition" href="about.html"><span data-hover="About">About</span></a></li>                        
                              <li className="link menu-timeline"><a className="ajax-link" data-type="page-transition" href="contact.html"><span data-hover="Contact">Contact</span></a></li>
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
                {/*/Header */}        
                {/* Content Scroll */}
                <div id="content-scroll">
                  {/* Main */}
                  <div id="main">
                    {/* Hero Section */}
                    <div id="hero" className="has-image">
                      <div id="hero-styles" className="parallax-onscroll">
                        <div id="hero-caption">
                          <div className="inner">
                            <div className="hero-subtitle">Design</div>    
                            <div className="hero-title">
                              <span>I</span>
                              <span>N</span>
                              <span>F</span>
                              <span>O</span>
                              <span> </span>
                              <span>B</span>
                              <span>U</span>
                              <span>G</span>
                              <span>S</span>	
                            </div>                                
                          </div>
                        </div>                                            
                      </div>
                    </div>
                    <div id="hero-bg-wrapper">
                      <div id="hero-image-parallax">
                        <div id="hero-bg-image" style={{backgroundImage: 'url(images/05hero.jpg)'}} />
                      </div>
                    </div>                         
                    {/*/Hero Section */}   
                    {/* Main Content */}
                    <div id="main-content">
                      <div id="main-page-content">
                        {/* Row */}
                        <div className="vc_row row_padding_top text-align-center small">
                          <hr />
                          <h2 className="has-mask">Insects also probably have the largest biomass of the terrestrial animals. At any time, it is estimated that there are some 10 quintillion.</h2>
                        </div>
                        {/*/Row */}
                        {/* Row */} 
                        <div className="vc_row full row_padding_top row_padding_bottom">
                          <figure className="has-animation has-parallax">
                            <img src={require("../../public/static/images/projects/ib01.jpg")} alt="Image Title" />               
                            <figcaption>Image Caption</figcaption>
                          </figure>
                        </div>
                        {/*/Row */}
                        {/* Row */}
                        <div className="vc_row small">
                          <div className="one_half">
                            <h2 className="has-mask">Selected Shots</h2>
                          </div>
                          <div className="one_half last">
                            <p className="has-animation" data-delay={10}>My favourite places on earth are the wild waterways where the forest opens its arms and a silver curve of river folds the traveller into its embrace.</p>
                            <a href="https://www.behance.net/gallery/52775051/MECHANICAL-BUGS" target="_blank" className="link has-animation" data-delay={100}><span>Read More</span></a>
                          </div>
                        </div>
                        {/*/Row */}
                        {/* Row */} 
                        <div className="vc_row row_padding_top">
                          <figure className="has-animation">
                            <a href="images/projects/ib02.jpg" className="image-link"><img src={require("../../public/static/images/projects/ib02.jpg")} alt="Image Title" /></a>               
                            <figcaption>Image Caption</figcaption>
                          </figure>
                          <hr /><hr />
                          <div className="one_half">
                            <figure className="has-animation">
                              <a href="images/projects/ib03.jpg" className="image-link"><img src={require("../../public/static/images/projects/ib03.jpg")} alt="Image Title" /></a>                
                              <figcaption>Image Caption</figcaption>
                            </figure>
                          </div>
                          <div className="one_half last">
                            <figure className="has-animation">
                              <a href="images/projects/ib04.jpg" className="image-link"><img src={require("../../public/static/images/projects/ib04.jpg")} alt="Image Title" /></a>               
                              <figcaption>Image Caption</figcaption>
                            </figure>
                          </div>
                          <hr />
                          <figure className="has-animation">
                            <a href="images/projects/ib01.jpg" className="image-link"><img src={require("../../public/static/images/projects/ib01.jpg")} alt="Image Title" /></a>                
                            <figcaption>Image Caption</figcaption>
                          </figure>
                        </div>
                        {/*/Row */}
                      </div>
                      {/*/Main Page Content */} 
                      {/* Project Navigation */} 
                      <div id="project-nav">
                        <div className="next-project-wrap">
                          <div className="next-project-image">
                            <div className="next-project-image-bg" style={{backgroundImage: 'url(images/06hero.jpg)'}} />
                          </div>
                          <div className="next-project-title">
                            <div className="inner">
                              <div className="main-subtitle has-animation" data-delay={100}>
                                <div className="subtitle-info">Next Project</div>
                                <div className="subtitle-name">Photography</div>
                              </div>
                              <a className="main-title has-animation next-ajax-link-project hide-ball" data-delay={150} data-type="page-transition" href="project06.html">
                                <span>N</span>
                                <span>E</span>
                                <span>O</span>
                                <span>N</span>
                                <span> </span>
                                <span>D</span>
                                <span>U</span>
                                <span>D</span>
                                <span>E</span>	
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
              </div>    
              {/*/Page Content */}
            </div>
          </main>
    
        );
    }
}

export default Project5;