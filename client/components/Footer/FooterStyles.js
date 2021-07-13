import styled from "styled-components";

const FooterStyles = styled.footer`
  width: 100%;
  height: 70px;
  background: #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    display: grid;
    width: 80%;
    margin: 0 auto;
    span {
      padding: 1rem;
      font-weight: 500;
      font-size: 0.8rem;
    }
  }
`;

export default FooterStyles;
