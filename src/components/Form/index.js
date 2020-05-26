import styled from 'styled-components';

const Form = styled.form.attrs(props => ({
  finded: props.finded,
}))`
  margin-top: 15px;
  display:flex;
  flex-direction: row;

  input {
    flex: 1;
    margin-bottom: 15px;
    border: 1px solid ${props => (props.finded ? '#ff6b6b' : '#eee')};
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
    transition: border 0.25s ease-out;
  }

`;

export default Form;
