import styled from 'styled-components'

export const BoxLogin = styled.div`
  align-self: center;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 48px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0px 1px 0px rgba(58, 58, 68, 0.1), 
    0px 12px 24px rgba(58, 58, 68, 0.08), 
    0px 24px 48px rgba(90, 91, 106, 0.08);
  @media(min-width:860px){
    width: 435px;
  }
  h2{
    font-size: 18px;
    font-weight: 400;
    line-height: 40px;
    margin-bottom: 10px;
  }
  form{
    width: 100%;
  }
  label{
    font-size: 16px;
    line-height: 24px;
  }
  input{
    width: 100%;
    height: 48px;
    margin-bottom: 8px;
    padding-left: 8px;
    border: 1px solid rgba(0, 0, 0, 0.25);
    border-radius: 4px;
  }
  div{
    width: 100%;
    position: relative;
    i{
      cursor: pointer;
      display: block;
      border: 0;      
      width: 32px;
      height: 32px;
      position: absolute;
      top: calc(50% - 20px);
      right: 0;
    }
  }
  button{
    color: #fff;
    width: 100%;
    height: 48px;
    background: #00718A;
  }
  .messageLogin{
    color: red;
    margin-top: 15px;
    text-align: center;
  }

`