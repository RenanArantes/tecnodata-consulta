import styled, { keyframes, css } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  } to {
    transform: rotate(360deg);
  }
`

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background: #f01;
  border: 0;
  height: 42px;
  padding-left: 15px;
  margin-left: 5px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }
  ${props => props.loading && css`
    svg {
      animation: ${rotate} 2s linear infinite;
    }
  `}
`;

