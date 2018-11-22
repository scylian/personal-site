import React from 'react';
import { graphql } from 'gatsby';
// import PropTypes from 'prop-types';
import Gallery from '../components/Gallery';

class GalleryPage extends React.Component {
  constructor(props) {
    super(props);
    this.state ={};
  }
  
  render() {
    const data = this.props.data.allMarkdownRemark.edges;
    return (
      <div>
        <Gallery photos={data} />
      </div>
    )
  }
}
// const Index = ({
//   data: {
//     allMarkdownRemark: { edges: projectEdges },
//   },
// }) => (
//   <Gallery projectEdges={projectEdges} />
// );

export default GalleryPage;

// Index.propTypes = {
//   data: PropTypes.shape({
//     allMarkdownRemark: PropTypes.shape({
//       edges: PropTypes.array.isRequired,
//     }),
//   }).isRequired,
// };

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
