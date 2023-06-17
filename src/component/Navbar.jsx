import React from "react";
import { styled } from "styled-components";
import star from "../assests/star.png";
import search from "../assests/search.png";

const Section = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 730px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const List = styled.ul`
  display: flex;
  alings-item: center;
  text-decoration: none;
`;

const Icons = styled.div``;
const Logo = styled.img`
  width: 40px;
  height: 40px;
`;

const ListItems = styled.li``;
const Icon = styled.img`
  width: 40px;
  height: 40px;
`;
const Button = styled.button``;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src={star} />
          <List>
            <ListItems>Home</ListItems>
            <ListItems>About</ListItems>
            <ListItems>Our Work</ListItems>
            <ListItems>Contact</ListItems>
          </List>
        </Links>
        <Icons>
          <Icon src={search} />
          <Button type="submit">Search</Button>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
