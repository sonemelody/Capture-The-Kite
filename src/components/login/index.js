import styled from "styled-components";
import { useLocation } from "react-router-dom";

const LoginBox = styled.div`
  background-color: #fafafa;
`;

const Login = () => {
  const location = useLocation();
  return (
    <LoginBox>
      <p style={{ fontSize: "30px", textAlign: "center" }}>로그인</p>
    </LoginBox>
  );
};

export default Login;
