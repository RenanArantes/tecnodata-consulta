import styled from 'styled-components'

export const Container = styled.div`
  width: auto;
  height: 130px;
  margin: 5px 5px;
  display: flexbox;
  align-items: center;
  align-self: center;
  color: white;

  @media print {
    color: black;
  }

`;
