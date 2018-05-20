import React from 'react'
import Link from 'gatsby-link';
import Header from '../components/header';
import './index.scss';

class Index extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="home-wrapper">
        <div className="quadrant one">
          <p>poems</p>
        </div>
        <div className="quadrant two">
          <p>video</p>
        </div>
        <div className="quadrant three">
          <p>bio</p>
        </div>
        <div className="quadrant four">
          <p>info</p>
        </div>

        <div className="content-block">
          <div className="wrapper">
            <a href="#">link one</a>
            <a href="#">link two</a>
            <a href="#">link three</a>
            <a href="#">link four</a>
          </div>
        </div>
      </div>
    )
  }
}


export default Index
