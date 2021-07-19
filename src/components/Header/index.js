import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-content: center;
  width: 100%;
  padding: 24px 60px;
  background: #fff;
  box-shadow: 0px 1px 1px rgba(58, 58, 68, 0.1), 0px 2px 5px 1px rgba(90, 103, 106, 0.05);
  position: relative;
  z-index: 10;
  > .brand{
    display: flex;
    align-items: center;
    gap: 33px;
  }
  h2{
    font-size:20px;
    font-weight: 300;
  }
`