import React from "react";
import { styled } from "styled-components";

const data = [
  "Web",
  "Design",
  "Development",
  "Illustration",
  "Product Design",
  "Social Media",
];

const OurWork = () => {
  const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    background: #0f0c29;
    background: -webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29);
    background: linear-gradient(to right, #24243e, #302b63, #0f0c29);
    display: flex;
    justify-content: center;
  `;

  const Container = styled.div`
    width: 720px;
    display: flex;
    justify-content: space-between;
  `;

  const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
  `;

  const List = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 20px;
    position: relative;

    ::after {
      content: "${(props) => props.text}";
      position: absolute;
      top: 0;
      left: 0;
    }
  `;

  const ListItem = styled.li`
    font-size: 50px;
    font-weight: 700;
    color: transparent;
    -webkit-text-stroke: 1px white;
  `;

  const Right = styled.div`
    flex: 1;
  `;
  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data?.map((item, index) => (
              <ListItem keys={index} text={item}>{item}</ListItem>
            ))}
          </List>
        </Left>
        <Right></Right>
      </Container>
    </Section>
  );
};

export default OurWork;
