import React from "react";
import styled from "styled-components";
import UserCard from "./UserCard";

const HeaderContainer = styled.header`
  background-color: rgb(10, 25, 41);
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin: 0;
`;

const Header = (props) => {
  return (
    <HeaderContainer>
      <Title>{props.title}</Title>
      <UserCard username={props.username} />
    </HeaderContainer>
  );
};

export default Header;
