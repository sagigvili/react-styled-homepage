import React, { useState } from "react";
import styled from "styled-components";

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  background-color: #fff;
  color: black;
  padding: 10px;
  margin-right: 40px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const DropdownContent = styled.div`
  display: ${(props) => (props.open ? "block" : "none")};
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 4px;
  right: 1px;
  left: auto;
`;

const DropdownItem = styled.div`
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  color: #333;
  cursor: pointer;
  &:hover {
    background-color: #ddd;
  }
`;

const UserCard = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <DropdownContainer>
      <DropdownButton onClick={toggleDropdown}>
        Hello {props.username}
      </DropdownButton>
      <DropdownContent open={isOpen}>
        <DropdownItem>My Permissions</DropdownItem>
      </DropdownContent>
    </DropdownContainer>
  );
};

export default UserCard;
