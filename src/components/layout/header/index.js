import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const HeaderSection = styled.header`
  width: 100%;
  height: 80px;

  .logo {
    flex-grow: 1;
    font-size: 32px;
    color: #5c5ce7;
    font-family: Pretendard-ExtraBold;
    padding: 0 30px;
  }
  .navItems {
    display: flex;
    align-items: center;
    width: 100%;
    height: 80px;
    position: fixed;
    left: 50%;
    transform: translate(-50%);
    font-family: Pretendard-Regular;
    border-bottom: 1px solid #e2e2e2;
    background-color: white;
    z-index: 100;
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
  .rank,
  .account {
    padding: 0.7rem 1rem;
    white-space: nowrap;
  }
  .auth {
    padding: 0.5rem 0.7rem;
    margin: 0 30px 0 1rem;
    white-space: nowrap;
    border-radius: 3px;
    background-color: #7d7dec;
    color: white;
  }
  .challenge:hover,
  .rank:hover,
  .account:hover {
    color: #5c5ce7;
    border-radius: 4px;
    transition: all 0.1s ease-in-out;
  }
  .auth:hover {
    background-color: #5c5ce7;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("token"));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    window.location.href = "http://localhost:3000/";
  };

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
          {isLoggedIn && (
            <div className="account">
              <StyledLink to="/account">MY PAGE</StyledLink>
            </div>
          )}
        </div>
        <div className="auth">
          {isLoggedIn ? (
            <StyledLink className="logout" onClick={handleLogout}>
              로그아웃
            </StyledLink>
          ) : (
            <StyledLink to="/login" className="login">
              로그인
            </StyledLink>
          )}
        </div>
      </div>
    </HeaderSection>
  );
};
export default Header;
