import styled from "styled-components";
import { Link } from "react-router-dom";

const RegisterBox = styled.div`
  border: 1px solid #dfdfdf;
  height: 63px;
  margin-top: 10px;
  font-family: Pretendard-Regular;
  .regiText {
    text-align: center;
    padding: 7px 0;
    font-size: 16px;
    span {
      margin-left: 4px;
      text-decoration: none;
      color: #5c5ce7;
      font-weight: bold;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Register = () => {
  return (
    <RegisterBox>
      <p className="regiText">
        계정이 없으신가요?{" "}
        <span>
          <StyledLink to="/join">가입하기</StyledLink>
        </span>
      </p>
    </RegisterBox>
  );
};

export default Register;
