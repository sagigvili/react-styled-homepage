import React from "react";
import styled from "styled-components";

// Create a styled component for the header
const HeaderContainer = styled.header`
  background-color: rgb(10, 25, 41);
  color: #fff;
  padding: 1rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin: 0;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Title>EC FPGA Homepage</Title>
    </HeaderContainer>
  );
};

export default Header;
