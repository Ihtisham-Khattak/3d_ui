import React from "react";
import { styled } from "styled-components";

const Hero = () => {
  const Section = styled.div`
    height: 100vh;
    background: #0f2027; /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #2c5364, #203a43, #0f2027);
    background: linear-gradient(to right, #2c5364, #203a43, #0f2027);
  `;
  return <Section>Hero</Section>;
};

export default Hero;
