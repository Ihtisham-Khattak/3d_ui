import { styled } from "styled-components";
import AboutUs from "./component/AboutUs";
import Contact from "./component/Contact";
import Hero from "./component/Hero";
import OurWork from "./component/OurWork";
import Navbar from "./component/Navbar";
import Three from "./component/Three";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  background: #0f2027;
  background: -webkit-linear-gradient(to right, #2c5364, #203a43, #0f2027);
  background: linear-gradient(to right, #2c5364, #203a43, #0f2027);
  overflow-y: auto;
  scrollbar-width: none;
  &::--webkit-scrollbar{
    display:none
  }
`;

function App() {
  return (
    <Container>
      <Navbar />
      <Hero />
      <AboutUs />
      <OurWork />
      <Contact />
      <Three />
    </Container>
  );
}

export default App;
