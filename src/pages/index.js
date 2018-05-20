import React from 'react'
import Link from 'gatsby-link';
import Header from '../components/header';
import './index.scss';

class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.data);
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
            {this.props.data.allContentfulAllPoems.edges[0].node.poemsList.map((poem, i) => {
              return (
                <a href={poem.poemLink}>{poem.journalName}, {poem.poemTitle}</a>
              );
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query indexQuery {
    allContentfulAllPoems (limit: 100) {
      edges {
        node {
          id
          poemsList {
            ...poemsInList
          }
        }
      }
    }
  }
  fragment poemsInList on ContentfulPoem {
    poemTitle
    poemLink
    journalName
  }
`
