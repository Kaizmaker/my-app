import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import './index.css'
import favicon16 from "../images/k.png";



const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content:
         data.site.siteMetadata.description },
        { name: 'keywords', content:
        data.site.siteMetadata.keywords },
      ]}

// icon置入設計

      link={[
  { rel: 'icon', type: 'image/png', sizes: "16x16", href: `${favicon16}` }
]}

    />
    <Header />
      {children()}
    </div>
  
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
  }
`
