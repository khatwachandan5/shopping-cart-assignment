import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 736px) {
    flex-direction: column;
  }
`;

export const PageDetails = styled.div`
  margin: 1.5rem 2rem 0 5rem;
  flex: 2 1;
  h1 {
    font-weight: 300;
  }
  p {
    font-weight: 100;
  }
  @media screen and (max-width: 736px) {
    margin: 0;
  }
`;

export const AuthForm = styled.div`
  margin: 2rem 0 1rem 0;
  flex: 3 1;
  @media screen and (max-width: 736px) {
    margin: 0;
  }

  form div {
    width: 60%;
    position: relative;
    margin-bottom: 2rem;
    margin-top: 1rem;
    border-bottom: 2px solid #eaeaea;
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    &:focus-within {
      border-bottom: 2px solid #c1354d;
    }

    input {
      text-decoration: none;
      border: none;
      outline: none;
      width: 100%;
      margin-bottom: 0.5rem;
      position: relative;
      padding: 0;
    }
    label {
      position: absolute;
      bottom: 0;
      left: 0;
      opacity: 0;
      transition: 0.2s bottom, 0.2s opacity;
    }

    input:focus + label {
      opacity: 1;
      padding: 0.5rem 0;
      bottom: 95%;
      color: #c1354d;
    }
  }
  form input[type="submit"] {
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
`;
