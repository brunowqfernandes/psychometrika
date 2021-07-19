import styled from "styled-components";

export const StyledGrade = styled.div`
  flex: 1;
  max-width: 435px;
  .gradeHeader {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
    h2{
      font-size: 28px;
      font-weight: 600;
      line-height: 32px;
      color: #424242;
    }
    .restoreOrder{
      border: 1px solid #65676B;
      border-radius: 4px;
      background: transparent;
      width: 36px;
      height: 36px;
      cursor: pointer;
      &:hover, &:active{
        outline: none;
        border-color: #00718A;
        svg path{
          fill: #00718A;
        }
      }
    }
  }
  
  .gradeWrapper{
    padding: 16px;  
    background: #fff;
    border-radius: 8px;
    width: 100%;
    .book{
      + .book{
        margin-top: 32px;
      }
    }
    .chapters{
      list-style: none;
      li{
        display: flex;
        gap: 10px;
        align-items: center;
        justify-content: space-between;
        background: #f5f5f5;
        padding: 12px 8px;
        font-weight: 600;
        &.dragging{
          background: rgba(0,0,0,0.25);
        }
        + li{
          margin-top: 8px;
        }
      }
      .reorder{
        order: -1;
        width: 24px;
        height: 24px;
        background: url('../images/arrange.svg') center no-repeat;
        background-size: contain;
      }
      .order{
        color: #8C939D;
        font-size: 14px;
        width: 20px;
        height: 20px;
        line-height: 20px;
        text-align: center;
        border: 1px solid #8C939D ;
        border-radius: 50%;
      }
      .chapName{
        flex: 1;
      }
      .chapBtns{
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background-color: #E6E6E7;
        background-size: 60%;
        background-position: center;
        background-repeat: no-repeat;
        cursor: pointer;
      }
      .hide{
        background-image: url('../images/eye.svg');
      }
      a{
        background-image: url('../images/open.svg');
      }
      
    }
  }
`