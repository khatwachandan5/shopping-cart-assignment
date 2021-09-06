import { PulseLoader } from "react-spinners";
import styled from "styled-components";

const Spinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 5em;
`;

const Loading = () => (
  <Spinner className="spinner">
    <PulseLoader color={"#c94971"} size={30} margin={"3px"} />
  </Spinner>
);

export default Loading;
