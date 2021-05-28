import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

const AboutBlurb = () => {
  const data = useStaticQuery(graphql`
    query {
      flower: file(relativePath: {eq: "flower-mouth.png"}) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fist: file(relativePath: {eq: "fist.png"}) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <div className="about-blurb">
      <div className="container">
        <div className="inner-blurb">
          <div className="content">
            <h3>The Ability to Create</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sit delectus, nam fugiat voluptatibus rem dolor illo quos dolores est dolorum a impedit maxime deleniti corporis odio, velit consequuntur? Eum.</p>
            <div className="btn-row">
              <Link to="/work">View Series</Link>
            </div>
          </div>
          <div className="images">
            <div className="top-right">
              <Img fluid={data.fist.childImageSharp.fluid}></Img>
            </div>
            <div className="bottom-left">
              <Img fluid={data.flower.childImageSharp.fluid}></Img>
            </div>
          </div>
        </div>
      </div>
      <div className="black-box"></div>
      <div className="black-box overlay"> </div>
    </div>
  );
};

export default AboutBlurb;