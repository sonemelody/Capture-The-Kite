import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderSection = styled.header`
  width: 1000px;
  height: 90px;
  margin: 0 auto;

  .logo {
    flex-grow: 1;
    font-size: 24px;
    font-weight: 700;
    color: white;
  }
  .navItems {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.2rem;
    padding: 0 30px;
    background-color: #222;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0);
    width: 95%;
    height: 80px;
    border-radius: 13px;
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translate(-50%);
  }
  .category {
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-gap: 10px;
    list-style: none;
    align-items: center;
    justify-content: end;
  }
  .challenge,
  .rank {
    padding: 0.7rem 1rem;
    white-space: nowrap;
  }
  .login {
    padding: 0.5rem 0.7rem;
    margin-left: 1rem;
    white-space: nowrap;
    background-color: #fafafa;
    border-radius: 3px;
    color: #222;
  }
  .challenge:hover,
  .rank:hover {
    background-color: rgb(80, 80, 230);
    border-radius: 4px;
    transition: all 0.2s ease-in-out;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

const Header = () => {
  return (
    <HeaderSection>
      <div className="navItems">
        <div className="logo">
          <StyledLink to="/">CAPSTONE</StyledLink>
        </div>
        <div className="category">
          <div className="challenge">
            <StyledLink to="/challenge">CHALLENGE</StyledLink>
          </div>
          <div className="rank">
            <StyledLink to="/rank">RANK</StyledLink>
          </div>
          <div className="login">
            <StyledLink to="/login" style={{ color: "black" }}>
              LOGIN
            </StyledLink>
          </div>
        </div>
      </div>
    </HeaderSection>
  );
};

export default Header;
