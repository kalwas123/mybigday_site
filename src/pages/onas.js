import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import SEO from "src/components/SEO.js"
import GImg from "gatsby-image"
import ScrollContainer from "react-indiana-drag-scroll"

import MainNav from "src/components/Navigation.js"
import { device } from "src/components/brakePoints"
import MainWrap from "src/components/MainWrap"
import BigTitle from "src/components/Texts/BigTitle"
import Paragraph from "src/components/Texts/Paragraph"
import SimpleSlider from "src/components/Slider/Slider"
import Person from "src/components/About/Person"

const HeaderWrap = styled.div`
  width: 100%;
  padding-top: 250px;
  margin: 0;
  height: calc(100vh - 250px);
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  .header_text-wrap {
    width: 50%;
  }
  @media ${device.tabletS} {
    flex-wrap: wrap;
    height: auto;
    .header_text-wrap {
      width: calc(100% - 40px);

      margin-left: 40px;
      flex-grow: 1;
    }
  }
`

const StyledSimpleSlider = styled(SimpleSlider)`
  flex-shrink: 1;
`

const ParagraphHeader = styled(Paragraph)`
  margin-top: 25px;
  margin-bottom: 40px;
  max-width: 83%;
`

const TeamSection = styled.div`
  padding: 110px 0 25px 0;
  background-color: #cdd3c8;
`

const TeamPersons = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-end;
  flex-wrap: wrap;
`

const PracowniaSection = styled.div`
  padding: 110px 0;

  .scroll-container {
    display: flex;
    padding-bottom: 100px;
    overflow-x: scroll;
    width: calc(100% + (50vw - 600px));
    &::-webkit-scrollbar {
      height: 1px;
      background-color: rgba(255, 255, 255, 0);
      cursor: hand;
    }

    &::-webkit-scrollbar-thumb {
      border-right: calc(50vw - 600px) solid rgba(255, 255, 255, 0);
      background-clip: padding-box;
    }
    &::-webkit-scrollbar-track {
      background-color: #f4f4f4;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #adb4a7;
    }
    @media ${device.laptop} {
      width: calc(100% + 50px);
    }
    @media ${device.mobile} {
      width: calc(100% + 20px);
    }
  }
`

const ParagraphPracownia = styled(Paragraph)`
  margin-top: 25px;
  margin-bottom: 40px;
  width: 455px;
  @media ${device.mobile} {
    width: 100%;
  }
`

const SlidePracownia = styled(GImg)`
  width: 860px;
  height: 570px;
  margin-right: 20px;
  flex-grow: 0;
  flex-shrink: 0;
  object-fit: cover;
  transition: all 0.5s;
  &.active {
    transform: scale(0.95);
    transition: all 0.5s;
    margin-right: -1vw;
  }
  @media ${device.laptop} {
    width: 50vw;
    height: 35vw;
  }
  @media ${device.mobile} {
    width: 80vw;
    height: 60vw;
  }
`

const SliderSeparator = styled.hr`
  border: 0;
  height: 1px;
  position: relative;
  top: -8px;
  background: #adb4a7;
  width: 100%;
`

class Onas extends React.Component {
  state = {
    isDraggable: false,
  }
  draggableOn = () => {
    this.setState({
      isDraggable: true,
    })
    console.log("isDraggable__ON")
  }

  draggableOff = () => {
    this.setState({
      isDraggable: false,
    })
    console.log("isDraggable__Off")
  }
  render() {
    // const onas = ({ data }) => {
    return (
      <>
        <SEO
          title={this.props.data.strapiAbout.SEO_Title}
          description={this.props.data.strapiAbout.SEO_Description}
          image={this.props.data.strapiAbout.SEO_Img.publicURL}
        />
        <MainNav />
        <MainWrap>
          <HeaderWrap>
            <div className={"header_text-wrap"}>
              <BigTitle
                data-sal="slide-up"
                data-sal-delay="300"
                data-sal-easing="ease"
                data-sal-duration="1000"
                icon="black"
              >
                {this.props.data.strapiAbout.Header_Title}
              </BigTitle>
              <ParagraphHeader
                data-sal="slide-up"
                data-sal-delay="300"
                data-sal-easing="ease"
                data-sal-duration="1000"
              >
                {this.props.data.strapiAbout.Header_Description}
              </ParagraphHeader>
            </div>
            <SimpleSlider
              data-sal="slide-up"
              data-sal-delay="300"
              data-sal-easing="ease"
              data-sal-duration="1000"
              Images={this.props.data.strapiAbout.Header_Slider}
            />
          </HeaderWrap>
        </MainWrap>
        <TeamSection>
          <MainWrap>
            <TeamPersons>
              {this.props.data.allStrapiOnasTeam.edges.map(document => (
                <Person
                  key={document.node.id}
                  name={document.node.Name}
                  pos={document.node.Position}
                  img={
                    document.node.Image
                      ? document.node.Image.childImageSharp.fluid
                      : null
                  }
                />
              ))}
            </TeamPersons>
          </MainWrap>
        </TeamSection>
        <MainWrap>
          <PracowniaSection>
            <BigTitle
              data-sal="slide-up"
              data-sal-delay="300"
              data-sal-easing="ease"
              data-sal-duration="1000"
            >
              {this.props.data.strapiAbout.Bottom_Title}
            </BigTitle>
            <ParagraphPracownia
              data-sal="slide-up"
              data-sal-delay="300"
              data-sal-easing="ease"
              data-sal-duration="1000"
            >
              {this.props.data.strapiAbout.Bottom_Description}
            </ParagraphPracownia>

            <ScrollContainer
              hideScrollbars="false"
              className="scroll-container"
              onStartScroll={this.draggableOn}
              onEndScroll={this.draggableOff}
              data-sal="slide-up"
              data-sal-delay="300"
              data-sal-easing="ease"
              data-sal-duration="1000"
            >
              {this.props.data.strapiAbout.Bottom_Slider.map(document => (
                <SlidePracownia
                  className={this.state.isDraggable ? "active" : ""}
                  fluid={document.localFile.childImageSharp.fluid}
                />
              ))}
            </ScrollContainer>

            <SliderSeparator />
          </PracowniaSection>
        </MainWrap>
      </>
    )
  }
}

export default Onas

export const personQuery = graphql`
  query onas {
    strapiAbout {
      SEO_Description
      SEO_Title
      SEO_Img {
        publicURL
      }
      Header_Description
      Header_Title
      Header_Slider {
        localFile {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
      Bottom_Title
      Bottom_Description
      Bottom_Slider {
        localFile {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
    allStrapiOnasTeam {
      edges {
        node {
          Name
          Position
          id
          Image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  }
`
