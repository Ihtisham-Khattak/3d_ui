import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { styled } from "styled-components";
import { MeshNormalMaterial } from "three";

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
          <boxGeometry args={[1, 1, 1]} />
          {/* applying different colors */}
          <meshNormalMaterial color="red" />
        </mesh>
      </Canvas>
    </Container>
  );
};

export default Three;
