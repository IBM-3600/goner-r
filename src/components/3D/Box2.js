// import React, { useRef, useEffect } from 'react';
// import * as THREE from 'three';

// const Box = ({ size = [1, 1, 1], color = 0x00ff00 }) => {
//   const boxRef = useRef();

//   useEffect(() => {
//     const geometry = new THREE.BoxGeometry(...size);
//     const material = new THREE.MeshBasicMaterial({ color });
//     const box = new THREE.Mesh(geometry, material);
//        // box.scale = new THREE.Vector3(1,1,1)
//     boxRef.current = box;

//     return () => {
//       // Dispose of resources when the component unmounts
//       geometry.dispose();
//       material.dispose();
//     };
//   }, [size, color]);

//   return <primitive object={boxRef.current} />;
// };

// export default Box;
// src/Box.js
import React, { useRef } from 'react';
import { BoxGeometry, MeshBasicMaterial } from 'three';
import { useFrame } from '@react-three/fiber';

const Box = ({ size = [1, 1, 1], color = 0x00ff00 }) => {
  const boxRef = useRef();

  useFrame(() => {
    if (boxRef.current) {
      boxRef.current.rotation.x += 0.01;
      boxRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={boxRef}>
      <boxGeometry args={size} />
      <meshBasicMaterial color={color} />
    </mesh>
  );
};

export default Box;
