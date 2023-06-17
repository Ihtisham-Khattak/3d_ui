import React from "react";
import { styled } from "styled-components";

const AboutUs = () => {
  const Section = styled.div`
    height: 100vh;
    background: #141e30;
    background: -webkit-linear-gradient(to right, #243b55, #141e30);
    background: linear-gradient(to right, #243b55, #141e30);
  `;
  return <Section>AboutUs</Section>;
};

export default AboutUs;
