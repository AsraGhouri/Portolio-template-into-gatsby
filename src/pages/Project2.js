import React from 'react';

class Project2 extends React.Component{
  componentDidMount(){
    window.addEventListener('load', PageLoad(), FirstLoad(), Portfolio(),
  );
  }
    render(){
        return(
            <main style={{    width: '100%'}}>		
            <div className="cd-index cd-main-content">
              {/* Page Content */}
              <div id="page-content">        
                {/* Content Scroll */}
                <div id="content-scroll">
                  {/* Main */}
                  <div id="main">
                    {/* Hero Section */}
                    <div id="hero" className="has-image" style={{opacity : '2'}}>
                      <div id="hero-styles" className="parallax-onscroll">
                        <div id="hero-caption">
                          <div className="inner">
                            <div className="hero-subtitle">Photography</div>    
                            <div className="hero-title">
                              <span>D</span>
                              <span>A</span>
                              <span>R</span>
                              <span>K</span>
                              <span> </span>
                              <span>P</span>
                              <span>A</span>
                              <span>T</span>
                              <span>H</span>	
                            </div>                                
                          </div>
                        </div>                                            
                      </div>
                    </div>
                    <div id="hero-bg-wrapper">
                      <div id="hero-image-parallax">
                        <div id="hero-bg-image" className="darK-path" />
                      </div>
                    </div>                         
                    {/*/Hero Section */}   
                    {/* Main Content */}
                    <div id="main-content">
                      <div id="main-page-content">
                        {/* Row */}
                        <div className="vc_row row_padding_top small text-align-center">
                          <hr />
                          <h2 className="has-mask">Love the trees until their leaves fall off and encourage them to try again next year.</h2>
                        </div>
                        {/*/Row */}
                        {/* Row */} 
                        <div className="vc_row row_padding_top row_padding_bottom">
                          <figure className="has-animation has-parallax">
                            <img src={require("../../public/static/images/projects/dp06.jpg")} alt="Image Title" />               
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
                            <a href="https://www.behance.net/gallery/57960205/Sombre-foret" target="_blank" className="link has-animation" data-delay={100}><span>Read More</span></a>
                          </div>
                        </div>
                        {/*/Row */}
                        {/* Row */}
                        <div className="vc_row row_padding_top has-animation" data-delay={10}>
                          <div className="container">
                            <div className="slider">
                              <div className="slide"><img src={require("../../public/static/images/projects/dp01.jpg")} alt="Image Title" /></div>
                              <div className="slide"><img src={require("../../public/static/images/projects/dp02.jpg")} alt="Image Title" /></div> 
                              <div className="slide"><img src={require("../../public/static/images/projects/dp03.jpg")} alt="Image Title" /></div> 
                              <div className="slide"><img src={require("../../public/static/images/projects/dp04.jpg")} alt="Image Title" /></div> 
                              <div className="slide"><img src={require("../../public/static/images/projects/dp05.jpg")} alt="Image Title" /></div> 
                            </div>
                          </div>
                        </div>
                        {/*/Row */}
                      </div>
                      {/*/Main Page Content */} 
                      {/* Project Navigation */} 
                      <div id="project-nav">
                        <div className="next-project-wrap">
                          <div className="next-project-image">
                            <div className="next-project-image-bg" style={{backgroundImage: 'url(images/03hero.jpg)'}} />
                          </div>
                          <div className="next-project-title">
                            <div className="inner">
                              <div className="main-subtitle has-animation" data-delay={100}>
                                <div className="subtitle-info">Next Project</div>
                                <div className="subtitle-name">Video</div>
                              </div>
                              <a className="main-title has-animation next-ajax-link-project hide-ball" data-delay={150} data-type="page-transition" href="project03.html">
                                <span>E</span>
                                <span>L</span>
                                <span>I</span>
                                <span>E</span>
                                <span> </span>
                                <span>S</span>
                                <span>A</span>
                                <span>A</span>
                                <span>B</span>
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

export default Project2;