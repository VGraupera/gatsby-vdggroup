import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'

import './../scss/index.scss'

const Layout = ({ children }) => (
<div class="wrapper">
    <Helmet
      title="The VDG Group"
    />
      <Header></Header>
      {children}
      <Footer></Footer>
  </div>
)

Layout.propTypes = {
  children: PropTypes.any,
}

export default Layout
