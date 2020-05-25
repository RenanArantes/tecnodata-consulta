import styled from 'styled-components'

export const Container = styled.div`
  margin: 5px 5px;
  display: flexbox;
  align-items: center;
  align-self: center;
  color: black;

  @media print {
    color: black;
  }

  img {
    max-width: 50px;
    height: auto;
  }
`;
