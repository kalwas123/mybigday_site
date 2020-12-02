import React from "react"
import styled from "styled-components"
import SEO from "src/components/SEO.js"
import { device } from "src/components/brakePoints"
import MainNav from "src/components/Navigation.js"
import { graphql } from "gatsby"
import MainWrap from "src/components/MainWrap"
import BigTitle from "src/components/Texts/BigTitle"
import Paragraph from "src/components/Texts/Paragraph"
import star from "src/assets/svg/star_grey.svg"
import Person from "src/components/Contact/Person"
import SocialLink from "src/components/Contact/SocialLink"
import ReactMarkdown from "react-markdown"

// import { Link } from "gatsby"

const Header = styled.header`
  background-color: #f4f4f4;
  height: 570px;
  padding-bottom: 110px;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  > div {
    position: relative;
    width: 41.66%;
  }
  @media ${device.laptop} {
    div {
      position: relative;
      width: 75%;
    }
  }
  @media ${device.tabletS} {
    div {
      position: relative;
      width: 100%;
    }
  }
`

const HeaderParagraph = styled(Paragraph)`
  margin-top: 25px;
  width: 100%;
  .marginP {
    p {
      margin-bottom: 20px;
    }
  }
`
const HeaderStar = styled.img`
  margin-bottom: 35px;
  @media ${device.tabletS} {
    position: absolute;
    right: 0;
    top: 170px;
  }
`

const People = styled.div`
  background-color: #efefef;
  padding: 30px 0 100px 0;
`

const PeopleWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Socials = styled.div`
  padding: 100px 0;
`

const SocialsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const contactPage = ({ data }) => (
  <>
    <SEO
      title={data.allStrapiPageContact.edges[0].node.SEO_Title}
      description={data.allStrapiPageContact.edges[0].node.SEO_Description}
      image={data.allStrapiPageContact.edges[0].node.SEO_Img.publicURL}
    />
    <MainNav />
    <MainWrap>
      <Header>
        <div>
          <BigTitle
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-easing="ease"
            data-sal-duration="1000"
          >
            {data.strapiPageContact.Title}
          </BigTitle>
          <HeaderParagraph
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-easing="ease"
            data-sal-duration="1000"
          >
            <ReactMarkdown
              className={"marginP"}
              // parserOptions={{ commonmark: true }}
              source={data.strapiPageContact.Description}
            />
          </HeaderParagraph>
        </div>
        <HeaderStar
          data-sal="slide-up"
          data-sal-delay="300"
          data-sal-easing="ease"
          data-sal-duration="1000"
          src={star}
        ></HeaderStar>
      </Header>
    </MainWrap>
    <People>
      <MainWrap>
        <PeopleWrap>
          {data.allStrapiContactPeople.edges.map(document => (
            <Person
              localisation={document.node.Location}
              name={document.node.Name}
              tel={document.node.Tel}
              mail={document.node.Mail}
            />
          ))}
        </PeopleWrap>
      </MainWrap>
    </People>
    <MainWrap>
      <Socials>
        <Paragraph
          data-sal="slide-up"
          data-sal-delay="300"
          data-sal-easing="ease"
          data-sal-duration="1000"
        >
          Bądź na bieżąco
        </Paragraph>
        <SocialsWrap>
          <SocialLink
            linkTo={"https://www.instagram.com/mybigday_pl/?hl=pl"}
            name={"Instagram"}
          ></SocialLink>
          <SocialLink
            linkTo={"https://www.facebook.com/mybigdaypl/"}
            name={"Facebook"}
          ></SocialLink>
          <SocialLink
            linkTo={"https://pl.pinterest.com/mybigdaypl/pins/"}
            name={"Pinterest"}
          ></SocialLink>
        </SocialsWrap>
      </Socials>
    </MainWrap>
  </>
)

export default contactPage

export const personQuery = graphql`
  query contact {
    strapiPageContact {
      Title
      Description
    }
    allStrapiPageContact {
      edges {
        node {
          SEO_Img {
            publicURL
          }
          SEO_Description
          SEO_Title
        }
      }
    }
    allStrapiContactPeople {
      edges {
        node {
          Name
          Location
          Mail
          Tel
        }
      }
    }
  }
`
