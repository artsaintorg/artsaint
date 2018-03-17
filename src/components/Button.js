import styled from 'styled-components'

const Button = styled.button`
  font-weight: bold;
  border-radius: 3px;
  cursor: pointer;
  outline: none;

  border: none;
  margin-right: 5px;

  ${({ size }) => {
    if (size === 'big') {
      return `
      font-size: 16px;
      padding: 12px 20px;
      `
    } else {
      return `
      font-size: 14px;
      padding: 8px 10px;
      `
    }
  }} transition: all 0.1s;

  ${({ color }) => {
    if (color === 'blue') {
      return `
        background: linear-gradient(to right, #0065FF, #2684FF);
        color: #fff;

        &:hover {
          background: linear-gradient(to right, #0052CC, #0065FF);
        }
      `
    } else {
      return `
        background: #fff;
        color: inherit;

        &:hover {
          background: linear-gradient(to right, #EBECF0, #F4F5F7);
        }
      `
    }
  }};
`

export default Button
