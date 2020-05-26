import styled from 'styled-components';

const Container = styled.div`
  max-width: 700px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 10px 30px;
  margin: 10px auto;

  h1 {
    font-size: 20px;
    display: flex;
    flex-direction: row;
  }
  svg {
    margin-right: 10px;
  }
  hr {
    margin-top: 5px;
    margin-bottom: 1px;
  }
`;

export default Container;
