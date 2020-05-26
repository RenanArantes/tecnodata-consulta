import styled from 'styled-components'

export const Container = styled.div`
  width: auto;
  height: 130px;
  margin: 5px 5px;
  display: flexbox;
  align-items: center;
  align-self: center;
  color: white;

  img {
    height: 3.75rem;
    margin: auto;
    width: 3.75rem;
  }

  @media print {
    color: black;
  }

  h1 {
    font-size: 10vw;
  }

  h2 {
    font-size: 5vw;
  }
`;
