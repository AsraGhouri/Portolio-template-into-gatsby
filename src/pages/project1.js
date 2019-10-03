import React from 'react';
import Header from '../components/header';
class Project1 extends React.Component{
  componentDidMount(){
  window.addEventListener('load', PageLoad(), FirstLoad(), Portfolio(),
);
}
    render(){
        return(
            <main style={{    width: '100%'}} class="animated bounce delay-2s">		
              {/* <Header /> */}
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
                    <div id="hero" className="has-image" style={{opacity : '2', color: 'white'}}>
                      <div id="hero-styles" className="parallax-onscroll">
                        <div id="hero-caption">
                          <div className="inner"  style={{color: 'white'}}>
                            <div className="hero-subtitle">Photography</div>    
                            <div className="hero-title">
                              <span>T</span>
                              <span>H</span>
                              <span>E</span>
                              <span> </span>
                              <span>Q</span>
                              <span>U</span>
                              <span>E</span>
                              <span>E</span>
                              <span>N</span>	
                            </div>                                
                          </div>
                        </div>                                            
                      </div>
                    </div>
                    <div id="hero-bg-wrapper">
                      <div id="hero-image-parallax">
                        <div id="hero-bg-image" className="queen" />
                      </div>
                    </div>                         
                    {/*/Hero Section */}   
                    {/* Main Content */}
                    <div id="main-content">
                      <div id="main-page-content">
                        {/* Row */}
                        <div className="vc_row row_padding_top row_padding_bottom text-align-center small">
                          <hr />
                          <h2 className="has-mask">A digital project that feature famous people in unexpected situations.</h2>
                        </div>
                        {/*/Row */}
                        {/* Row */} 
                        <div className="vc_row  full">
                          <figure className="has-animation has-parallax">
                            <img src={require("../../public/static/images/projects/ss04.jpg")} alt="Image Title" />               
                            <figcaption>Image Caption</figcaption>
                          </figure>
                        </div>
                        {/*/Row */}
                        {/* Row */}
                        <div className="vc_row row_padding_top small">
                          <h2 className="has-mask">Unrivalled digital production expertise to produce world-class visuals.</h2>
                          <hr />
                          <div className="one_half" />
                          <div className="one_half last">
                            <p className="has-animation">After weeks of planning and countless hours in post-production, my collaboration with Robert Frolich at Filtre Studio on our series is almost complete.</p>
                            <a href="https://www.behance.net/gallery/68547321/Queen-For-A-Day" target="_blank" className="link has-animation"><span>Read More</span></a>
                          </div>
                        </div>
                        {/*/Row */}
                        {/* Row */} 
                        <div className="vc_row row_padding_top row_padding_left row_padding_right full">
                          <figure className="has-animation has-parallax">
                            <img src={require("../../public/static/images/projects/ss01.jpg")} alt="Image Title" />               
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
                            <div className="next-project-image-bg" id="project1"  />
                          </div>
                          <div className="next-project-title">
                            <div className="inner">
                              <div className="main-subtitle has-animation" data-delay={100}>
                                <div className="subtitle-info">Next Project</div>
                                <div className="subtitle-name">Photography</div>
                              </div>
                              <a className="main-title has-animation next-ajax-link-project hide-ball" data-delay={150} data-type="page-transition" href="project02.html">
                                <span>D</span>
                                <span>A</span>
                                <span>R</span>
                                <span>K</span>
                                <span> </span>
                                <span>P</span>
                                <span>A</span>
                                <span>T</span>
                                <span>H</span>
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

export default Project1;