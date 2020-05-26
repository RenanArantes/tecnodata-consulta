import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Container } from './styles';

export default function Header() {
  const { logoImage } = useStaticQuery(
    graphql`
      query {
        logoImage: file(relativePath: { eq: "logo.png"}) {
          childImageSharp {
            fixed(width: 100, height: 130) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )

  return(
    <Link to="/" style={{ textDecoration: 'none' }}>
      <Container>
        <Img
          fixed={logoImage.childImageSharp.fixed}
          alt="Tecnodata logo"
        />
        <div>
          <h1>Tecnodata</h1>
          <h2>Consulta Receita Federal</h2>
      </div>
      </Container>
    </Link>
  )
}
