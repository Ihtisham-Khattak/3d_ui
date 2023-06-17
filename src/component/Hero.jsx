import React from "react";
import { styled } from "styled-components";

const Hero = () => {
  const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    background: #0f2027; /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #2c5364, #203a43, #0f2027);
    background: linear-gradient(to right, #2c5364, #203a43, #0f2027);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  `;

  const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: space-between;
    scroll-swap-align: center;
  `;

  const LeftHeading = styled.div`
    height: 100vh;
    display: flex;
    justify-content: space-between;
    scroll-swap-align: center;
  `;

  const RightImage = styled.div`
    height: 100vh;
    display: flex;
    justify-content: space-between;
    scroll-swap-align: center;
  `;
  return (
    <Section>
      <Container>Hero</Container>
    </Section>
  );
};

export default Hero;
