import { styled } from "styled-components";
import AboutUs from "./component/AboutUs";
import Contact from "./component/Contact";
import Hero from "./component/Hero";
import OurWork from "./component/OurWork";

const Container = styled.div`
  height: 100vh;
  background: #0f2027; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #2c5364, #203a43, #0f2027);
  background: linear-gradient(to right, #2c5364, #203a43, #0f2027);
`;

function App() {
  return (
    <Container>
      <Hero />
      <AboutUs />
      <OurWork />
      <Contact />
    </Container>
  );
}

export default App;
