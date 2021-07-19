import styled, { css } from "styled-components";

export const StyledViewSelect = styled.div`
  position: relative;
  > button{
    display: flex;
    gap: 6px;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;  
    position: relative;
    border: 0;
    border-radius: 8px;
    background: ${props => props.open ? 'rgba(#000, 0.1)' : '#FFF'};
    cursor: pointer;
    &::after{
      content: '';
      width: 16px;
      height: 16px;
      background: url('../images/down.svg') center no-repeat;
      background-size: contain;
      display: inline-block;
    }
     span{
      color: #0683F9;
      font-weight: 600;
      text-align: center;
      line-height: 32px;
      display: block;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), #0683F9;
    }
  }
  div{
    ${props => !props.open && css`
      display: none;
    `}
    width: 291px;
    border-radius: 4px;
    background: #fff;
    box-shadow: 0px 2px 10px rgba(90, 103, 106, 0.15);
    position: absolute;
    top: calc(100% + 4px);
    right: 0;
    
    p{
      font-size: 16px;
      color: #616161;
      font-weight: 600;
      margin-bottom: 8px;
    }
    form{
      padding: 16px;
      label{
        display: block;
        margin-bottom: 8px;
        cursor: pointer;
        input{
          display: none;
          + span::before{
            content: "";
            display: inline-block;
            width: 10px;
            height: 10px;
            margin-right: 8px;
            border-radius: 50%;
            border: 1px solid;
          }
          &:checked{
            + span::before{
              background: radial-gradient(#00718A 0%, #00718A 40%, transparent 50%, transparent);
              border-color: #00718A;
            }
          }
        }
      }
    }
    button{
      color: #00718A;
      font-size: 14px;
      font-weight: 600;
      background: transparent;
      border: 0;
      cursor: pointer;
      &.btn-sair{
        width: 100%;
        height: 44px;
        border-top: 1px solid #F2F2F2;
      }
    }
  }
`