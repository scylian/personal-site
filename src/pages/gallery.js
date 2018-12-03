import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import Gallery from '../components/Gallery';
import './gallery.css';

class GalleryPage extends React.Component {
  constructor(props) {
    super(props);
    this.state ={};
  }
  
  render() {
    const data = this.props.data.allMarkdownRemark.edges;
    return (
      <Layout location={this.props.location}>
        <Gallery photos={data} />
      </Layout>
    )
  }
}

export default GalleryPage;

export const query = graphql`
  query GalleryQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            cover {
              childImageSharp {
                fluid(maxWidth: 850, quality: 90, traceSVG: { color: "#f3f3f3" }) {
                  ...GatsbyImageSharpFluid_tracedSVG
                  originalImg
                }
              }
            }
          }
        }
      }
    }
  }
`;
