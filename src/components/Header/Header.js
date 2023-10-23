import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: rgb(10, 25, 41);
  color: #fff;
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
    </HeaderContainer>
  );
};

export default Header;
