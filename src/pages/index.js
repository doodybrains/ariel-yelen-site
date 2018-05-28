import React from 'react'
import Link from 'gatsby-link';
import Header from '../components/header';
import './index.scss';
import blob from '../fonts/blob.svg'
class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeContent: ''
    }
  }

  render() {
    const contentType = null;
    let data = null;
    const changeClass = this.state.activeContent !== '' ? 'content-up' : 'content-down';

    if (this.state.activeContent === 'poems' && this.props.data) {
      data = (
        this.props.data.allContentfulAllPoems.edges[0].node.poemsList.map((poem, i) => {
          return (
            <a key={i} target="_blank" href={poem.poemLink}>{poem.journalName}, {poem.poemTitle}</a>

          );
        })
      )
    }
    if (this.state.activeContent === 'videos' && this.props.data) {
      data = (
        this.props.data.allContentfulAllVideos.edges[0].node.videosList.map((vid, i) => {
          return (
            <p key={i}>{vid.videoTitle}</p>
          );
        })
      )
    }
    if (this.state.activeContent === 'about' && this.props.data) {
      data = (
        <div
          className=""
          dangerouslySetInnerHTML={{
            __html: this.props.data.contentfulAbout.aboutText.childMarkdownRemark.html,
          }} />
      )
    }

    if (this.state.activeContent === 'blog' && this.props.data) {
      data = (
        this.props.data.allContentfulAllPosts.edges[0].node.blogPostList.map((bp, i) => {
          return (
            <p key={i}>{bp.title}</p>
          );
        })
      )
    }
    return (
      <div className={`home-wrapper ${changeClass}`}>
        <div className="nav">
          <p onClick={this.setContent.bind(this, 'poems')} className="quadrant one">
            poems
          </p>
          <p onClick={this.setContent.bind(this, 'videos')} className="quadrant two">
            video
          </p>
          <p onClick={this.setContent.bind(this, 'about')} className="quadrant three">
            bio
          </p>
          <p onClick={this.setContent.bind(this, 'blog')} className="quadrant four">
            &
          </p>
        </div>


        <div className="content-block">
        <div className="image">
        <svg id="organic-blob" width="300" height="300" xmlns="http://www.w3.org/2000/svg" filter="url(#goo)">
         <g>
          <circle r="100" cy="145" cx="150">
            <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 145 150" to="360 145 150" dur="10s" repeatCount="indefinite"/>
           </circle>
          <circle r="100" cy="155" cx="150">
            <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="360 155 150" to="0 155 150" dur="20s" repeatCount="indefinite"/>
           </circle>
          <circle r="100" cy="150" cx="145">
            <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 150 145" to="360 150 145" dur="30s" repeatCount="indefinite"/>
           </circle>
          <circle r="100" cy="150" cx="155">
            <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="360 150 155" to="0 150 155" dur="25s" repeatCount="indefinite"/>
           </circle>
         </g>
        </svg>
        </div>

          <div className="wrapper">
            <div className="overflow-wrapper">
              {data}
              <p>adding text here just to test</p>
              <p>adding text here just to test</p>
              <p>adding text here just to test</p>
              <p>adding text here just to test</p>
              <p>adding text here just to test</p>
              <p>adding text here just to test</p>
              <p>adding text here just to test</p>
              <p>adding text here just to test</p>
              <p>adding text here just to test</p>
              <p>adding text here just to test</p>
              <p>adding text here just to test</p>
              <p>adding text here just to test</p>
              <p>adding text here just to test</p>
              <p>adding text here just to test</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  setContent(type) {
    this.setState({
      activeContent: type
    })
  }
}

export default Index

export const pageQuery = graphql`
  query indexQuery {
    contentfulAbout {
      aboutText {
        childMarkdownRemark {
          html
        }
      }
    }
    allContentfulAllPosts (limit: 100) {
      edges {
        node {
          id
          blogPostList {
            ...blogPostInList
          }
        }
      }
    }
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
    allContentfulAllVideos (limit: 100) {
      edges {
        node {
          id
          videosList {
            ...videosInList
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
  fragment videosInList on ContentfulVideo {
    videoTitle
    vimeoLink
  }
  fragment blogPostInList on ContentfulBlogPost {
    title
    link
  }
`
