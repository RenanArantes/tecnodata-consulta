import styled from 'styled-components'

export const Container = styled.div`
  width: 80%;
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
    @media screen and (min-width: 601px) {
      font-size: 80px;
    }

    @media screen and (max-width: 600px) {
      font-size: 50px;
    }
  }

  h2 {
    font-size: 35px;
  }
`;
