import React from 'react';
import styled from 'react-emotion';
import Img from 'gatsby-image';
import Lightbox from 'react-images';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  width: 100%;
`;

const Item = styled.div`
  position: relative;
  &:before {
    content: '';
    display: block;
    padding-top: 100%;
  }
`;

const Content = styled.div`
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;

  a {
    color: #fff;
    height: 100%;
    left: 0;
    opacity: 0;
    padding: 2rem;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 10;
    transition: all 0.3s ease-in-out;
    text-decoration: none;

    &:hover {
      color: #fff;
      opacity: 1;
      text-decoration: none;
    }
  }
`;

const ImageWrapper = styled.div`
  > div {
    height: 100%;
    left: 0;
    position: absolute !important;
    top: 0;
    width: 100%;

    > div {
      position: static !important;
    }
  }
`;

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      lightbox: false,
      photos: props.photos.map(photo => Object.assign({ src: photo.node.frontmatter.cover.childImageSharp.fluid.originalImg })),
    };
  }

  gotoPrevLightboxImage() {
    const { photo } = this.state;
    this.setState({ photo: photo - 1 });
  }

  gotoNextLightboxImage() {
    const { photo } = this.state;
    this.setState({ photo: photo + 1 });
  }

  openLightbox(photo, event) {
    event.preventDefault();
    this.setState({ lightbox: true, photo });
  }

  closeLightbox() {
    this.setState({ lightbox: false });
  }

  render() {
    return (
      <Wrapper>
        {this.props.photos.map((photo, i) => {
          return (
            <Item key={photo.node.fields.slug} onClick={e => this.openLightbox(i, e)}>
              <Content>
                <ImageWrapper>
                  <Img fluid={photo.node.frontmatter.cover.childImageSharp.fluid} />
                </ImageWrapper>
              </Content>
            </Item>
          );
        })}
        <Lightbox
          backdropClosesModal
          images={this.state.photos}
          currentImage={this.state.photo}
          isOpen={this.state.lightbox}
          onClickPrev={() => this.gotoPrevLightboxImage()}
          onClickNext={() => this.gotoNextLightboxImage()}
          onClose={() => this.closeLightbox()}
        />
      </Wrapper>
    );
  }
}

export default Gallery;