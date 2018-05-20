import React from 'react'
import Link from 'gatsby-link';
import Header from '../components/header';
import './index.scss';

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

    if (this.state.activeContent === 'poems' && this.props.data) {
      data = (
        this.props.data.allContentfulAllPoems.edges[0].node.poemsList.map((poem, i) => {
          return (
            <a key={i} href={poem.poemLink}>{poem.journalName}, {poem.poemTitle}</a>
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
      <div className="home-wrapper">
        <div onClick={this.setContent.bind(this, 'poems')} className="quadrant one">
          <p>poems</p>
        </div>
        <div onClick={this.setContent.bind(this, 'videos')} className="quadrant two">
          <p>video</p>
        </div>
        <div onClick={this.setContent.bind(this, 'about')} className="quadrant three">
          <p>bio</p>
        </div>
        <div onClick={this.setContent.bind(this, 'blog')} className="quadrant four">
          <p>&</p>
        </div>

        <div className="content-block">
          <div className="wrapper">
            {data}
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
