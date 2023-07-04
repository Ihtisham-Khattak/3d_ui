import {
  OrbitControls,
  PerspectiveCamera,
  RenderTexture,
  Text,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { styled } from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  scroll-snap-align: center;
`;

const Three = () => {
  return (
    <Container>
      <Canvas>
        <OrbitControls enableZoom={false} enableRotate />
        {/* wihtout color will not be to shown */}
        <ambientLight intensity={1} />
        {/* edges of the box */}
        <directionalLight position={[3, 2, 1]} />
        <mesh>
          <boxGeometry args={[2, 2, 2]} />

          {/* applying different colors */}
          <meshStandardMaterial color="#5E5A3C">
            <RenderTexture attach="map">
              <PerspectiveCamera makeDefault position={[0,0,1]} />
              <color attach="background" args={["#1E363F"]} />
              <Text fontSize={.8} color={["pink"]}>
                Hello
              </Text>
            </RenderTexture>
          </meshStandardMaterial>
        </mesh>
      </Canvas>
    </Container>
  );
};

export default Three;
