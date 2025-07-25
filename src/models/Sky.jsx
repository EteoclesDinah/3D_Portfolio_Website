import { useGLTF } from '@react-three/drei';
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import skyScene from '../assets/3d/sky.glb';

// 3D Model from: https://sketchfab.com/3d-models/phoenix-bird-844ba0cf144a413ea92c779f18912042
const Sky = ({ isRotating }) => {
    const sky = useGLTF(skyScene);

    const skyRef = useRef();

    //It ensures smooth animations by making the rotation frame rate-independent.
    //'delta' represents the time in seconds since the last frame
    useFrame((_, delta) => {
      
        //can modify the speed of rotation updating the numerical value
        skyRef.current.rotation.y += 0.05 * delta;
      
    })

  return (
    <mesh ref={skyRef}>
        <primitive object={sky.scene} />
    </mesh>
  );
};

export default Sky;