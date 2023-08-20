import React, { useRef } from "react";
import { PerspectiveCamera, RenderTexture, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Cube = () => {
  const textRef = useRef();
  useFrame((state) => (textRef.current.position.x = state.clock.elapsedTime));

  return (
    <mesh>
      <boxGeometry args={[2, 2, 2]} />

      {/* applying different colors */}
      <meshStandardMaterial color="#5E5A3C">
        <RenderTexture attach="map">
          <PerspectiveCamera makeDefault position={[0, 0, 1]} />
          <color attach="background" args={["#1E363F"]} />
          <Text ref={textRef} fontSize={0.8} color={["pink"]}>
            Hello Changes
          </Text>
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
};

export default Cube;
