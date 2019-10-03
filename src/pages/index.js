import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
    {/* Large content */}
    <div id="ajax-content-wrap" style={{ width: '100%', display: 'inline-block' }}>
      <div className="side-header">
        <div className="main-heaer">
          Modern <br />
          cozy luxury <br />
          in the interior

            </div>
        <p className="header-note">
          Individual development of <br />

          residential and public<br/>
          
          buildings 
							
            </p>
      </div>
      <div className="wrapper-content">
      </div>
      {/* <img src={require('../../public/static/wp-content/uploads/2019/08/PRECH-MAIN2.jpg')}/> */}
    </div>
    {/*/container-wrap*/}

  </div>
)

export default IndexPage
