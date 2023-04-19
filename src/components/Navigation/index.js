import styled from "styled-components";
import { MenuItems } from "./MenuItems";
import "./NavbarStyle.css";

const Nav = () => {
  return (
    <nav className="NavbarItems">
      <h1 className="Title">CAPSTONE</h1>
      <ul className="NavMenu">
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.url} className={item.cName}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
