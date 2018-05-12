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
        <div className="quadrant">
          <p>poems</p>
        </div>
        <div className="quadrant">
          <p>video</p>
        </div>
        <div className="quadrant">
          <p>bio</p>
        </div>
        <div className="quadrant">
          <p>info</p>
        </div>
      </div>
    )
  }
}


export default Index
