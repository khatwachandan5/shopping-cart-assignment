import styled from "styled-components";

export const CategoryLists = styled.div`
  padding-top: 1rem;
  img {
    height: 12rem;
  }
  button {
    background-color: #b90e3fd9;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    font-weight: 400;
    text-align: center;
    padding: 0.8rem;
    &:hover {
      cursor: pointer;
      background-color: #ffffff;
      border: 2px solid #b90e3fd9;
      color: #b90e3fd9;
      padding: 10px;
    }
  }
  p {
    font-size: 13px;
    font-weight: 200;
  }

  div.leftAlign,
  div.rightAlign {
    display: flex;
    justify-content: space-between;
    box-shadow: 0 -1rem 0.6rem -1rem #808080;
    margin-top: 0.8rem;
    padding: 1.6rem 0;
  }

  .leftAlign {
    flex-direction: row;
  }
  .rightAlign {
    flex-direction: row-reverse;
  }
  @media screen and (max-width: 736px) {
    padding-top: 0.3rem;
    img {
      height: 5rem;
    }
    button {
      font-size: 10px;
    }
  }
`;

export const CategoryDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding: 0.6rem;
  margin: 0 auto;
`;

export const CategoryItemName = styled.div`
  padding-bottom: 0.5rem;
  strong {
    font-size: 1rem;
    font-weight: 500;
  }
`;

export const CategoryItemImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
