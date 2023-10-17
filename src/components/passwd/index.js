import styled from "styled-components";
import Passwd from "./Passwd";

const PasswdSection = styled.div`
  width: 800px;
  margin: 50px auto 0;
  min-height: 600px;
`;

const PasswdSec = () => {
  return (
    <PasswdSection>
      <Passwd />
    </PasswdSection>
  );
};

export default PasswdSec;
