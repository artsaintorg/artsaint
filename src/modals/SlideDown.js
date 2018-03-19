import transition from 'styled-transition-group'

export default transition.div.attrs({
  unmountOnExit: true,
  timeout: 1000
})`
  &:enter {
    opacity: 0.01;
  }
  &:enter-active {
    opacity: 1;
    transition: opacity 200ms ease-in;
  }
  &:exit {
    opacity: 1;
  }
  &:exit-active {
    opacity: 0.01;
    transition: opacity 200ms ease-in;
  }
`
