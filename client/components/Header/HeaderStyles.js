import styled from "styled-components";

export const HeaderStyles = styled.header`
  box-shadow: 0px 2px 5px #808080;
  margin-bottom: 0.3rem;
  padding-top: 0.5rem;
  display: flex;
  width: 100%;
  z-index: 100;
  top: 0;
  overflow-x: hidden;

  a {
    text-decoration: none;
    color: #626060;
    font-weight: 400;
  }
  a:hover {
    color: #c1354d;
  }

  @media screen and (max-width: 1024px) {
    max-width: calc(100vw);
  }
  @media screen and (max-width: 736px) {nav {display: none;}}
`;

export const Wrapper = styled.div`
  display: grid;
  width: 80%;
  margin: 0 auto;
  height: 6rem;
  grid-template-columns: 50% 50%;
  grid-template-areas: "leftHeader rightHeader";

  li:last-child {
    padding-left: 1.6rem;
    padding-right: 0.6rem;
  }

  @media screen and (max-width: 1024px) {
    max-width: calc(100vw);
  }
  @media screen and (max-width: 736px) {
    height: 3rem;
  }
`;

export const LeftHead = styled.div`
  grid-area: leftHeader;
  display: flex;
  nav {
    padding: 3rem 0 0 3rem;
  }
  @media screen and (max-width: 736px) {
      img {
        height: 2.5rem;
      }
  }
`;

export const RightHead = styled.div`
  grid-area: rightHeader;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  position: relative;
`;

export const UnOrderList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: flex-end;
  margin: 0;
  font-size: 1.2rem;
  font-weight: 600;
`;

export const CartButton = styled.div`
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
  background: #eaeaea;
  align-items: center;
  padding: 1rem;
  button {
    background: inherit;
    border: none;
    :hover {
      cursor: pointer;
    }
    span {
        margin-left: 8px;;
    }
  }

  @media screen and (max-width: 736px) {
    padding: 0.8rem;
    padding-right: 2rem;
  }
`;