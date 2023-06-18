import React from "react";
import { styled } from "styled-components";
import AstronautImg from "../assests/astronaut.png";

const AboutUs = () => {
  const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    background: #141e30;
    background: -webkit-linear-gradient(to right, #243b55, #141e30);
    background: linear-gradient(to right, #243b55, #141e30);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  `;

  const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: space-between;
    scroll-snap-align: center;
    align-items: center;
  `;

  const LeftImage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
    flex: 3;
    color: #fff;
  `;
  const Title = styled.h1`
    font-size: 50px;
  `;

  const WhatAbout = styled.div`
    display: flex;
    color: #f56428;
    gap: 10px;
  `;

  const Question = styled.svg`
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
  `;
  const SubTitle = styled.h2``;

  const Desc = styled.p`
    font-size: 0.9rem;
  `;

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

  const RightHeading = styled.div`
    flex: 2;
    position: relative;
  `;

  const Astronaut = styled.img`
    width: 20rem;
    height: 20rem;
    transform: rotate(25deg);
    object-fit: contain;
    padding-left: 50px;
    animation: animate 15s infinite ease-out alternate;

    @keyframes animate {
      to {
        transform: translateY(10px);
      }
    }
    /* position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    margin: auto 50px; */
  `;

  return (
    <Section>
      <Container>
        <LeftImage>
          <Astronaut src={AstronautImg} />
        </LeftImage>
        <RightHeading>
          <Title>Think. Make. Solve.</Title>
          <WhatAbout>
            <Question
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
              />
            </Question>
            <SubTitle>What we Do</SubTitle>
          </WhatAbout>
          <Desc>
            We Enjoy Creating Delightful, Human-Centered Digital Experiences.
          </Desc>
          <Button>Learn More</Button>
        </RightHeading>
      </Container>
    </Section>
  );
};

export default AboutUs;
