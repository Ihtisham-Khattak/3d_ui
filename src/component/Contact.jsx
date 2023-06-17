import React from "react";
import { styled } from "styled-components";

const Contact = () => {
  const Section = styled.div`
    height: 100vh;
    background: #3C3B3F;
    background: -webkit-linear-gradient(to bottom,  #3C3B3F, #605C3C, #3C3B3F); 
    background: linear-gradient(to bottom, #605C3C, #3C3B3F); 
    
  `;

  return <Section>Contact</Section>;
};

export default Contact;
