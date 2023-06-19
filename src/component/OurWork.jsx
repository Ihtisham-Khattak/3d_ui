import React from "react";
import { styled } from "styled-components";

const OurWork = () => {
  const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    background: #0f0c29;
    background: -webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29);
    background: linear-gradient(to right, #24243e, #302b63, #0f0c29);
  `;

  const Container = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    background: #0f0c29;
    background: -webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29);
    background: linear-gradient(to right, #24243e, #302b63, #0f0c29);
  `;

  const Left = styled.div`
    height: 100vh;
    scroll-snap-align: center;
  `;

  const List = styled.div`
    height: 100vh;
    scroll-snap-align: center;
  `;

  const ListItem = styled.div`
    height: 100vh;
    scroll-snap-align: center;
  `;

  const Right = styled.div`
    height: 100vh;
    scroll-snap-align: center;
  `;
  return (
    <Section>
      <Container></Container>
    </Section>
  );
};

export default OurWork;
