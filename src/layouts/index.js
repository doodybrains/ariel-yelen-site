import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/header'
import './index.scss'

class Layout extends React.Component {
  render() {
    return (
      <div className="outer-wrapper">
      <Helmet>
          <meta charSet="utf-8" />
          <title>Ariel Yelen</title>
          <link href="https://fonts.googleapis.com/css?family=Roboto+Mono|Rubik:900" rel="stylesheet" />
      </Helmet>
        <div>
          <Header />
          {this.props.children()}
        </div>
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
