import React from "react";
import { Main, Title, LogoContainer, Logo } from "./HomePage.styled";
import umbrella from "../../assets/umbrella/Umbrella_Corporation_logo.svg";

export const HomePage = () => {
  return (
    <Main>
      <Title>Welcome to Home Page</Title>
      <LogoContainer>
        <Logo src={umbrella} alt="loader" />
      </LogoContainer>
    </Main>
  );
};
