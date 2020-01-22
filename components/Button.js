import styled from 'styled-components'

const colors = {
  primary: '#428bca',
  success: '#5cb85c',
  info: '#5bc0de',
  warnning: '#f0ad4e',
  danger: '#d9534f'
}

const Button = styled.button`
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  color: #fff;
  background-color: ${props => colors[props.color]};
  border-color: #007bff;
`

export default Button
