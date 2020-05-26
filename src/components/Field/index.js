import styled from 'styled-components';

export const Field = styled.div`
  display: inline;
  margin: 10px 50px;

  @media screen and (min-width: 541px) {
    p:first-child {
      color: #160;
      float: left;
    }
    p {
      color: #f0f;
      float: right;
    }
  }

  @media screen and (max-width: 540px) {
    p {
      color: #f00;
      clear: both;
    }
  }

  ol {
    list-style-position: inside;
    list-style-type: upper-roman;
    margin-left: 15px;
  }
  ul {
    margin-left: 35px;
  }
`
export default Field;
