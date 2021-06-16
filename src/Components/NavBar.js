import React from 'react';
import styled from 'styled-components';
import logoImg from '../img/logo.svg';
const NavBarStyled = styled.header `
position: fixed;
top: 0;
left: 0;
z-index: 999;
height: 80px;
width :100vw;
display: flex;
justify-content: space-between;
align-items: center;
padding: 15px;
background-color: #299B01;
color: white;

`;
const Logo = styled.div`
display:flex;
align-items:center;

`;
const H1 = styled.h1`
font-size:24px;
margin-left:15px;
`;
const ImgLogo = styled.img`
width: 50px;
`;
const Button = styled.button`
 background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 10px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    font-family:Pacifico;
`;

export const NavBar = () => (
  <NavBarStyled>
  <Logo><ImgLogo src={logoImg} alt="logo"/>
  <H1>MrDonald</H1>
  </Logo>
  <Button>войти</Button>
  </NavBarStyled>
);