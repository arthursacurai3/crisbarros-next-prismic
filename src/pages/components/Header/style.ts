import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: row;
  padding: 0 2rem;
  width: 100vw;
  height: 3rem;
  white-space: nowrap;
  font-size: .85rem;
  background: transparent;
  border-bottom: 1px solid gray;

  &:hover{
    background: ${props => props.theme.colors.background};
  }

  nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
  }
`

export const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;

  & > div {
    display: flex;
    align-items: center;
    height: 100%;
  }

  .menu-first-level{
    height: 100%;
    display: flex;
    align-items: center;

    &:last-of-type{
      margin-left: 30px;
    }

    &:hover {
      
    }

    h2 {
      text-transform: uppercase;
      font-weight: normal;
      font-size: inherit;
      width: 4rem;
      height: 80%;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;

      &:hover{
        border-bottom: 2px solid black;
      }
    }
  }
`

export const MenuDropList = styled.div`
  &.close {
    display: none;
  }

  &.showMenu {
    position: fixed;
    top: 3rem;
    left: 0;
    width: 100vw;
    display: flex;
    gap: 3rem;
    justify-content: center;
    border-bottom: 1px solid gray;

    .menu-second-level{
      a {
        text-transform: uppercase;
      }

      .item-second-level{
        font-size: .85rem;
        padding: 1rem 0;
      }

      .item-third-level{
        font-size: .71rem;
        padding: .3rem 0;
      }
    }
  }
`

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ActionsItensContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > *{
    margin-left:3rem;
  }

  .icon-minicart:not(.minicart-empty){
    position: relative;

    &::after{
      content: '';
      position: absolute;
      top: 4px;
      right: 0;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: black;
    }
  }
`