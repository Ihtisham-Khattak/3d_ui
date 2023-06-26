import React, { useState } from "react";
import { styled } from "styled-components";
import Map from "./Map";
import axios from "axios";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  background: #3c3b3f;
  background: -webkit-linear-gradient(to bottom, #3c3b3f, #605c3c, #3c3b3f);
  background: linear-gradient(to bottom, #605c3c, #3c3b3f);
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  margin: 50px;
  align-items: center;
  justify-content: flex-end;
`;
const Title = styled.h1`
  font-size: 20px;
  font-weight: 400;
  color: #fff;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 25rem;
`;

const Input = styled.input`
  padding: 10px;
  border: none;
  background-color: #e8e6e6;
`;

const TextArea = styled.textarea`
  border: none;
  background-color: #e8e6e6;
  padding: 10px;
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

const Right = styled.div`
  flex: 1;
  z-index: 0;
`;

const Contact = () => {
  const [userName, setUserName] = useState();
  const [userEmail, setUserEmail] = useState();
  const [userMessage, setUserMessage] = useState();

  // Handle Form
  const handleForm = async (e) => {
    e.preventDefault();

    await axios
      .post("http://localhost:3001/send-mail", {
        userName,
        userEmail,
        userMessage,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Section>
      <Container>
        <Left>
          <Form onSubmit={handleForm}>
            <Title>Contact Us</Title>
            <Input
              placeholder="Enter Name"
              value={userName}
              type="text"
              name="userName"
              // onChange={(e) => setformName(e.target.value)}
              onChange={(e) => setUserName(e.target.value)}
            />
            <Input
              placeholder="Enter Email"
              value={userEmail} // Corrected prop name
              type="text"
              name="userEmail"
              onChange={(e) => setUserEmail(e.target.value)}
            />
            <TextArea
              placeholder="Message"
              rows={10}
              value={userMessage}
              type="text"
              name="userMessage"
              // onChange={(e) => setformMessage(e.target.value)}
              onChange={(e) => setUserMessage(e.target.value)}
            />
            <Button type="submit">Submit</Button>

            {window.location.hash === "#success" && (
              <div className="success">
                <p>Email Send Successfully</p>
              </div>
            )}
            {window.location.hash === "#error" && (
              <div id="error">
                <p>An error occured while submitting the form.</p>
              </div>
            )}
          </Form>
        </Left>
        <Right>
          <Map />
        </Right>
      </Container>
    </Section>
  );
};

export default Contact;
