import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: rgb(10, 25, 41);
  color: #fff;
  padding: 20px 0;
  padding: 20px;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin: 0 10px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <ContentContainer>
        <FooterLink href="/">Home</FooterLink>
        <FooterLink href="/about">About</FooterLink>
        <FooterLink href="/contact">Contact</FooterLink>
      </ContentContainer>
    </FooterContainer>
  );
};

export default Footer;
