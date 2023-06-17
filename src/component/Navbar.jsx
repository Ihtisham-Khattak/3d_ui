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
  padding: 10px 10px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  color: #fff;
`;

const List = styled.ul`
  display: flex;
  alings-item: center;
  list-style: none;
`;

const ListItems = styled.li`
  padding: 10px;
`;

const Icons = styled.div`
  display: flex;
  gap: 20px;
`;
const Logo = styled.img`
  width: 40px;
  height: 40px;
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;
  display: inline-flex;
  color: #fff;
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
