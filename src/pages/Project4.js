import React from 'react';

class Project4 extends React.Component{
  componentDidMount(){
    window.addEventListener('load', PageLoad(), FirstLoad(), Portfolio(),
  );
  }
    render(){
        return(
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
              <div id="page-content" >
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
                    {/* <nav> 
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
                    </nav> */}
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
                    <div id="hero" className="has-image" style={{opacity : '2'}}>
                      <div id="hero-styles" className="parallax-onscroll">
                        <div id="hero-caption">
                          <div className="inner">
                            <div className="hero-subtitle">Design</div>    
                            <div className="hero-title">
                              <span>L</span>
                              <span>A</span>
                              <span>D</span>
                              <span>Y</span>
                              <span> </span>
                              <span>I</span>
                              <span>N</span>
                              <span> </span>
                              <span>R</span>
                              <span>E</span>
                              <span>D</span>	
                            </div>                                
                          </div>
                        </div>                                            
                      </div>
                    </div>
                    <div id="hero-bg-wrapper">
                      <div id="hero-image-parallax">
                        <div id="hero-bg-image" className="lady-in-red"  />
                      </div>
                    </div>                         
                    {/*/Hero Section */}   
                    {/* Main Content */}
                    <div id="main-content">
                      <div id="main-page-content">
                        {/* Row */}
                        <div className="vc_row row_padding_top text-align-center small">
                          <hr />
                          <h2 className="has-mask">The lady in red is dancing with me, cheek to cheek. There's nobody here, it's just you and me.</h2>
                        </div>
                        {/*/Row */}
                        {/* Row */} 
                        <div className="vc_row row_padding_top row_padding_bottom">
                          <figure className="has-animation has-parallax">
                            <img src={require("../../public/static/images/projects/lr01.jpg")} alt="Image Title" />               
                            <figcaption>Image Caption</figcaption>
                          </figure>
                        </div>
                        {/*/Row */}
                        {/* Row */}
                        <div className="vc_row small text-align-center">
                          <h1 className="has-mask">Selected Shots</h1>                                
                        </div>
                        {/*/Row */}
                        {/* Row */} 
                        <div className="vc_row row_padding_top">
                          <figure className="has-animation has-parallax">
                            <img src={require("../../public/static/images/projects/lr02.jpg")} alt="Image Title" />               
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
                            <div className="next-project-image-bg" style={{backgroundImage: 'url(images/05hero.jpg)'}} />
                          </div>
                          <div className="next-project-title">
                            <div className="inner">
                              <div className="main-subtitle has-animation" data-delay={100}>
                                <div className="subtitle-info">Next Project</div>
                                <div className="subtitle-name">Design</div>
                              </div>
                              <a className="main-title has-animation next-ajax-link-project hide-ball" data-delay={150} data-type="page-transition" href="project05.html">
                                <span>I</span>
                                <span>N</span>
                                <span>F</span>
                                <span>O</span>
                                <span> </span>
                                <span>B</span>
                                <span>U</span>
                                <span>G</span>
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
                </div>
                {/*/Content Scroll */}
              </div>    
              {/*/Page Content */}
            </div>
          </main>
        );
    }
}

export default Project4;