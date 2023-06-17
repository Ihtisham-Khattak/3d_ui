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
    color: #fff;
  `;
  const RightImage = styled.div``;
  const Title = styled.div``;
  const WhatAbout = styled.div`
    display: flex;
    gap: 10px;
  `;
  const SubTitle = styled.div``;
  const Desc = styled.div``;
  const Button = styled.button`
    align-items: center;
    background-color: #fa6400;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    color: #fff;
    cursor: pointer;
    font-size: 16px;
    padding: 10px 10px;
    position: relative;
    text-decoration: none;
    width: auto;

    &:hover {
      background: #292e49;
      color: #fff;
    }
  `;

  return (
    <Section>
      <Container>
        <LeftHeading>
          <Title>Think. Make. Solve.</Title>
          <WhatAbout>
            -- <SubTitle>What we Do</SubTitle>
          </WhatAbout>
          <Desc>
            We Enjoy Creating Delightful, Human-Centered Digital Experiences.
          </Desc>
          <Button>Learn More</Button>
        </LeftHeading>
      </Container>
    </Section>
  );
};

export default Hero;
