import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderSection = styled.header`
  width: 100%;
  height: 80px;
  background-color: white;

  .logo {
    flex-grow: 1;
    font-size: 32px;
    color: #5c5ce7;
    font-family: Pretendard-Bold;
    padding: 0 30px;
  }
  .navItems {
    display: flex;
    align-items: center;
    width: 100%;
    height: 80px;
    position: fixed;
    z-index: 1;
    left: 50%;
    transform: translate(-50%);
    font-family: Pretendard-Regular;
    border-bottom: 1px solid #e2e2e2;
    background-color: white;
  }
  .category {
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-gap: 10px;
    list-style: none;
    align-items: center;
    justify-content: end;
    font-size: 1.3rem;
  }
  .challenge,
  .rank {
    padding: 0.7rem 1rem;
    white-space: nowrap;
  }
  .login {
    padding: 0.5rem 0.7rem;
    margin: 0 30px 0 1rem;
    white-space: nowrap;
    border-radius: 3px;
    background-color: #7d7dec;
    color: white;
  }
  .challenge:hover,
  .rank:hover {
    color: #5c5ce7;
    border-radius: 4px;
    transition: all 0.1s ease-in-out;
  }

  .login:hover {
    background-color: #5c5ce7;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Header = () => {
  return (
    <HeaderSection>
      <div className="navItems">
        <div className="logo">
          <StyledLink to="/">CTK</StyledLink>
        </div>
        <div className="category">
          <div className="challenge">
            <StyledLink to="/challenge">CHALLENGE</StyledLink>
          </div>
          <div className="rank">
            <StyledLink to="/rank">RANK</StyledLink>
          </div>
        </div>
        <div className="login">
          <StyledLink to="/login">로그인</StyledLink>
        </div>
      </div>
    </HeaderSection>
  );
};

export default Header;
