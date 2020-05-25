import React from 'react';
import { Link } from 'gatsby';

import logo from '../../images/logo.png';

import { Container } from './styles';

export default function Header() {

  return(
    <Link to="/" style={{ textDecoration: 'none' }}>
      <Container>
        <img alt="Tecnodata" src={logo}/>
        <div>
          <h1>Tecnodata</h1>
          <h2>Consulta Receita Federal</h2>
      </div>
      </Container>
    </Link>
  )
}
