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
          const isLink = poem.poemLink ? true : false;
          if (isLink) {
            return (
              <a className="poem-post" key={i} target="_blank" href={poem.poemLink}>
                <span className="journal">{poem.journalName}</span>, <span>{poem.poemTitle}</span>
              </a>
            );
          } else {
            return (
              <p className="poem-post" key={i}>
                <span className="journal">{poem.journalName}</span>, <span>{poem.poemTitle}</span>
              </p>
            );
          }

        })
      )
    }
    if (this.state.activeContent === 'videos' && this.props.data) {
      data = (
        this.props.data.allContentfulAllVideos.edges[0].node.videosList.map((vid, i) => {
          var vimeoString = vid.vimeoLink;
          var hash = vimeoString.substring(vimeoString.lastIndexOf("/") + 1);

          return (
            <div className="video-post" key={i}>
              <p>{vid.videoTitle}</p>
              <div className="frame">
                <iframe src={`https://player.vimeo.com/video/${hash}`} frameBorder="0" allowFullScreen></iframe>
              </div>
            </div>
          );
        })
      )
    }
    if (this.state.activeContent === 'about' && this.props.data) {
      data = (
        <div
          className="about"
          dangerouslySetInnerHTML={{
            __html: this.props.data.contentfulAbout.aboutText.childMarkdownRemark.html,
          }} />
      )
    }
    if (this.state.activeContent === 'blog' && this.props.data) {
      data = (
        this.props.data.allContentfulAllPosts.edges[0].node.blogPostList.map((bp, i) => {

          return (
            <div className="blog-post" key={i}>
              {!bp.link &&
                <span className="title">{bp.title}</span>
              }
              {bp.link &&
                <a href={bp.link} target="_blank" className="title">{bp.title}</a>
              }

              {bp.bodyText &&
                <div
                  className="blog-text"
                  dangerouslySetInnerHTML={{
                    __html: bp.bodyText.childMarkdownRemark.html,
                  }} />
              }
            </div>
          );
        })
      )
    }
    return (
      <a className={`home-wrapper ${changeClass}`}>
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
          <div className="wrapper">
            <div className="overflow-wrapper">
              {data}
            </div>
          </div>
        </div>
      </a>
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
    bodyText {
      childMarkdownRemark {
        html
      }
    }
  }
`
