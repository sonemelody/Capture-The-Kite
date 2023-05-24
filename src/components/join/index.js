import styled from "styled-components";
import Join from "./Join";

const JoinSection = styled.div`
  width: 400px;
  margin: 50px auto 0;
  min-height: 600px;
`;

const JoinSec = () => {
  return (
    <JoinSection>
      <Join />
    </JoinSection>
  );
};

export default JoinSec;
