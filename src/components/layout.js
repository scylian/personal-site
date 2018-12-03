import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import NavigationHeader from '../components/NavigationHeader'
import { StaticQuery, graphql } from 'gatsby'


import '../assets/scss/main.scss'

const Layout = ({ children, location }) => {

  let content;

  if (location && location.pathname === '/') {
    content = (
      <div>
        {children}
      </div>
    )
  } else {
    content = (
      // <div id="wrapper" className="page">
        <div>
          {children}
        </div>
      // </div>
    )
  }

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
              menuLinks {
                name
                link
              }
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'Personal website and professional portfolio for Front-end Developer, Bien Nguyen' },
              { name: 'keywords', content: 'software, engineer, front-end, developer, photographer, gamer, community manager, portfolio, professional, personal, website, blog, creative, artistic' },
            ]}
          >
            <html lang="en" />
          </Helmet>
          {location && location.pathname === '/' ? content :
            <div>
              <NavigationHeader 
              menuLinks={data.site.siteMetadata.menuLinks}
              siteTitle={data.site.siteMetadata.title}
              location={location} />
              {content}
            </div>
          }
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
