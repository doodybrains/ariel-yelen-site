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
          <title>My Title</title>
          <link rel='stylesheet' href='https://www.cnap.graphismeenfrance.fr/infini/css/infini-fontes.css'/>
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
