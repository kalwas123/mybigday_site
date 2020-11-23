import React from "react"
import { graphql } from "gatsby"
import SEO from "src/components/SEO.js"
import ContextConsumer from "src/layouts/Contex.js"

import styled from "styled-components"
import { device } from "src/components/brakePoints"
import MainNav from "src/components/Navigation.js"
import MainWrap from "src/components/MainWrap"
import ProjectCard from "src/components/Portfolio/ProjectCard"
import BigTitle from "src/components/Texts/BigTitle"
import Paragraph from "src/components/Texts/Paragraph"

const HeaderWrap = styled.div`
  background-color: #cdd3c8;
  padding-top: 250px;
`

const Title = styled(BigTitle)`
  margin-left: 8.33%;
  width: 50%;
  @media ${device.laptop} {
    width: 66.66%;
  }
  @media ${device.tabletS} {
    margin-left: 0%;
    width: 100%;
  }
`

const HeaderParagraph = styled(Paragraph)`
  margin-left: 8.33%;
  width: 66.66%;
  margin-top: 25px;
  @media ${device.laptop} {
    width: 75%;
  }
  @media ${device.tabletS} {
    margin-left: 0%;
    width: 100%;
  }
`
const PortfolioSection = styled.div`
  width: 100%;
  padding-top: 100px;
  margin-bottom: 110px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0px;
    height: 580px;
    width: 100%;
    background-color: #cdd3c8;
  }
`

const PortfolioNav = styled.ul`
  list-style: none;
  display: flex;
  height: 45px;
  overflow-x: scroll;
  padding-left: 5px;
  width: calc(100% - 5px);
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
    background-color: #cdd3c8;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #adb4a7;
  }
`

const NavElement = styled.li`
  margin-right: 100px;
  color: #fff;
  cursor: pointer;
  font-family: "Cirka-Regular";
  position: relative;
  color: #fff;
  transition: all 0.5s;
  flex-shrink: 0;
  height: 20px;
  &:before {
    content: "";
    position: absolute;
    bottom: -10px;
    left: -5px;
    width: 0;
    height: 1px;
    background-color: #000000;
    transition: all 0.5s;
  }

  &.offerActive {
    color: #000000;
    transition: all 0.5s;
  }
  &.offerActive::before {
    content: "";
    width: calc(100% + 10px);
    transition: all 0.5s;
  }
  &:hover {
    color: #000000;
    transition: all 0.5s;
  }
  &:hover::before {
    content: "";
    width: 20px;
    transition: all 0.5s;
  }
  &.offerActive:hover::before {
    content: "";
    width: calc(100% + 10px);
    transition: all 0.5s;
  }
  @media ${device.tabletS} {
    margin-right: 40px;
  }
`

const OfferDescription = styled(Paragraph)`
  margin-top: 50px;
  width: 66.66%;
  margin-bottom: 150px;
  @media ${device.tabletS} {
    width: 100%;
  }
`

const ProjectsWrap = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

class contactPage extends React.Component {
  state = {
    // offer: this.props.location.state.offer - 1 || 0,
    // offer: this.props.location.search.replace("?", "") - 1 || 0,
    offer: 0,
  }

  changeOffer = n => {
    this.setState({
      offer: n - 1,
    })
  }

  render() {
    return (
      <ContextConsumer>
        {({ data, set }) => (
          <>
            <SEO
              title={
                this.props.data.allStrapiPageRental.edges[0].node.SEO_Title
              }
              description={
                this.props.data.allStrapiPageRental.edges[0].node
                  .SEO_Description
              }
              image={
                this.props.data.allStrapiPageRental.edges[0].node.SEO_Img
                  .publicURL
              }
            />
            <MainNav col />
            <HeaderWrap>
              <MainWrap>
                <Title
                  icon="big"
                  col="white"
                  data-sal="slide-up"
                  data-sal-delay="300"
                  data-sal-easing="ease"
                  data-sal-duration="1000"
                >
                  {this.props.data.strapiPageRental.Title}
                </Title>
                <HeaderParagraph
                  data-sal="slide-up"
                  data-sal-delay="300"
                  data-sal-easing="ease"
                  data-sal-duration="1000"
                >
                  {this.props.data.strapiPageRental.Description}
                </HeaderParagraph>
              </MainWrap>
            </HeaderWrap>
            <PortfolioSection>
              <MainWrap>
                <PortfolioNav
                  data-sal="slide-up"
                  data-sal-delay="300"
                  data-sal-easing="ease"
                  data-sal-duration="1000"
                >
                  {this.props.data.allStrapiRentalCategories.edges.map(
                    document => (
                      <NavElement
                        className={
                          document.node.strapiId - 1 === data.offerNum - 1
                            ? "offerActive"
                            : null
                        }
                        onClick={() =>
                          set({ offerNum: document.node.strapiId })
                        }
                        // onClick={() => this.changeOffer(document.node.strapiId)}
                      >
                        {document.node.Title}
                      </NavElement>
                    )
                  )}
                </PortfolioNav>

                <OfferDescription
                  data-sal="slide-up"
                  data-sal-easing="ease"
                  data-sal-duration="1000"
                >
                  {
                    this.props.data.allStrapiRentalCategories.edges[
                      data.offerNum ? data.offerNum - 1 : 0
                    ].node.Description
                  }
                </OfferDescription>
                <ProjectsWrap>
                  {this.props.data.allStrapiRentalCategories.edges[
                    data.offerNum ? data.offerNum - 1 : 0
                  ].node.rental_products.map(document => (
                    <ProjectCard
                      Img={document.Thumbnail.childImageSharp.fluid}
                      Name={document.Name}
                      Category={"/wypozyczalnia/"}
                    />
                  ))}
                </ProjectsWrap>
              </MainWrap>
            </PortfolioSection>
          </>
        )}
      </ContextConsumer>
    )
  }
}

export default contactPage

export const portfolioQuery = graphql`
  query Wypozyczalnia {
    allStrapiRentalCategories {
      edges {
        node {
          Title
          Description
          strapiId
          rental_products {
            Name
            Thumbnail {
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
    strapiPageRental {
      Title
      Description
    }
    allStrapiPageRental {
      edges {
        node {
          SEO_Description
          SEO_Title
          SEO_Img {
            publicURL
          }
        }
      }
    }
  }
`
