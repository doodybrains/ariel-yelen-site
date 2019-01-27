import React from 'react'
import Link from 'gatsby-link';
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
                <div className="dots">
                  <span dangerouslySetInnerHTML={{__html: "&there4;"}} />
                  <span dangerouslySetInnerHTML={{__html: "&there4;"}} />
                  <span dangerouslySetInnerHTML={{__html: "&there4;"}} />
                </div>
                <span className="journal">
                  {poem.journalName}
                </span>,
                <span>{poem.poemTitle}</span>
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
              <div className="dots">
                <span dangerouslySetInnerHTML={{__html: "&there4;"}} />
                <span dangerouslySetInnerHTML={{__html: "&there4;"}} />
                <span dangerouslySetInnerHTML={{__html: "&there4;"}} />
                <span dangerouslySetInnerHTML={{__html: "&there4;"}} />
                <span dangerouslySetInnerHTML={{__html: "&there4;"}} />
                <span dangerouslySetInnerHTML={{__html: "&there4;"}} />
                <span dangerouslySetInnerHTML={{__html: "&there4;"}} />
                <span dangerouslySetInnerHTML={{__html: "&there4;"}} />
                <span dangerouslySetInnerHTML={{__html: "&there4;"}} />
                <span dangerouslySetInnerHTML={{__html: "&there4;"}} />
                <span dangerouslySetInnerHTML={{__html: "&there4;"}} />
              </div>
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
        <div>
          <div className="dots">
            <span dangerouslySetInnerHTML={{__html: "&there4;"}} />
            <span dangerouslySetInnerHTML={{__html: "&there4;"}} />
            <span dangerouslySetInnerHTML={{__html: "&there4;"}} />
            <span dangerouslySetInnerHTML={{__html: "&there4;"}} />
            <span dangerouslySetInnerHTML={{__html: "&there4;"}} />
            <span dangerouslySetInnerHTML={{__html: "&there4;"}} />
            <span dangerouslySetInnerHTML={{__html: "&there4;"}} />
            <span dangerouslySetInnerHTML={{__html: "&there4;"}} />
            <span dangerouslySetInnerHTML={{__html: "&there4;"}} />
            <span dangerouslySetInnerHTML={{__html: "&there4;"}} />
            <span dangerouslySetInnerHTML={{__html: "&there4;"}} />
          </div>

          <div
            className="about"
            dangerouslySetInnerHTML={{
              __html: this.props.data.contentfulAbout.aboutText.childMarkdownRemark.html,
            }} />
        </div>

      )
    }
    if (this.state.activeContent === 'contact' && this.props.data) {
      data = (
        <div>
          <div className="dots">
            <span dangerouslySetInnerHTML={{__html: "&there4;"}} />
            <span dangerouslySetInnerHTML={{__html: "&there4;"}} />
            <span dangerouslySetInnerHTML={{__html: "&there4;"}} />
            <span dangerouslySetInnerHTML={{__html: "&there4;"}} />
            <span dangerouslySetInnerHTML={{__html: "&there4;"}} />
            <span dangerouslySetInnerHTML={{__html: "&there4;"}} />
            <span dangerouslySetInnerHTML={{__html: "&there4;"}} />
            <span dangerouslySetInnerHTML={{__html: "&there4;"}} />
            <span dangerouslySetInnerHTML={{__html: "&there4;"}} />
            <span dangerouslySetInnerHTML={{__html: "&there4;"}} />
            <span dangerouslySetInnerHTML={{__html: "&there4;"}} />
          </div>

          <div
            className="about"
            dangerouslySetInnerHTML={{
              __html: this.props.data.contentfulContact.contactInfo.childMarkdownRemark.html,
            }} />
        </div>

      )
    }
    if (this.state.activeContent === '' && this.props.data) {
      data = (
        this.props.data.allContentfulAllPosts.edges[0].node.blogPostList.map((bp, i) => {
          const yearTitle = bp.yearTitleEntry ? true : false;

          if (yearTitle) {
             return (
               <div className="blog-post-year" key={i}>
                <h5>
                  <span dangerouslySetInnerHTML={{__html: "&there4;"}} />
                  <span dangerouslySetInnerHTML={{__html: "&there4;"}} />
                  <span dangerouslySetInnerHTML={{__html: "&there4;"}} /> {bp.title} <span dangerouslySetInnerHTML={{__html: "&there4;"}} />
                  <span dangerouslySetInnerHTML={{__html: "&there4;"}} />
                  <span dangerouslySetInnerHTML={{__html: "&there4;"}} />
                </h5>
               </div>
             )
          } else {
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
          }

        })
      )
    }
    if (this.state.activeContent === 'blog' && this.props.data) {
      data = (
        this.props.data.allContentfulAllOtherProjects.edges[0].node.listOfOtherProjects.map((op, i) => {
            return (
              <div className="blog-post" key={i}>
                {op.title &&
                  <a href={op.link} target="_blank" className="title">{op.title}</a>
                }

                {op.info &&
                  <div
                    className="blog-text"
                    dangerouslySetInnerHTML={{
                      __html: op.info.childMarkdownRemark.html,
                    }} />
                }
              </div>
            );
        })
      )
    }
    return (
      <a className={`home-wrapper ${changeClass}`}>
        <div className="header">
          <h4 onClick={this.setContent.bind(this, '')}>ariel yelen</h4>
        </div>
        <div className="nav">
          <p onClick={this.setContent.bind(this, 'poems')} className="quadrant one">
            poems
          </p>
          <p onClick={this.setContent.bind(this, 'blog')} className="quadrant five">
            &
          </p>
          <p onClick={this.setContent.bind(this, 'about')} className="quadrant three">
            bio
          </p>
          <p onClick={this.setContent.bind(this, 'videos')} className="quadrant two">
            video
          </p>
          <p onClick={this.setContent.bind(this, 'contact')} className="quadrant four">
            contact
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
    contentfulContact {
      contactInfo {
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
    allContentfulAllOtherProjects (limit: 100) {
      edges {
        node {
          id
          listOfOtherProjects {
            ...otherProjectsInList
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
  fragment otherProjectsInList on ContentfulOtherProject {
    title
    info {
      childMarkdownRemark {
        html
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
    yearTitleEntry
  }
`
