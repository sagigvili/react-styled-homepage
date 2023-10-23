import { React, useState } from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: rgb(10, 25, 41);
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

const ProfileDropdown = styled.div`
  position: relative;
`;

const ProfileButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
`;

const DropdownContent = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: absolute;
  background-color: #333;
  top: 100%;
  right: 0;
  z-index: 1;
`;

const Link = styled.a`
  display: block;
  padding: 10px;
  text-decoration: none;
  color: #fff;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin: 0;
`;

const Header = (props) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <HeaderContainer>
      <Title>{props.title}</Title>
      <ProfileDropdown>
        <ProfileButton onClick={toggleDropdown}>
          Hello {props.username}
        </ProfileButton>
        <DropdownContent isOpen={isDropdownOpen}>
          <Link href="/permissions">My Permissions</Link>
        </DropdownContent>
      </ProfileDropdown>
    </HeaderContainer>
  );
};

export default Header;
