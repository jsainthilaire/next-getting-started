import styled from 'styled-components'

import Header from './Header'
import Meta from './Meta'

const LayoutStyled = styled.div`
  margin: 20;
  padding: 20;
  border: '1px solid #DDD';
  color: red;
`

const Layout = (props) => (
  <LayoutStyled>
    <Meta />
    <Header />
    {props.children}
  </LayoutStyled>
)

export default Layout
