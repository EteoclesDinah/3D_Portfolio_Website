import React, { useEffect, useRef } from 'react';
import { useAnimations, useGLTF } from '@react-three/drei';
import birdScene from '../assets/3d/bird.glb';
import { useFrame } from '@react-three/fiber';

// 3D Model from: https://sketchfab.com/3d-models/phoenix-bird-844ba0cf144a413ea92c779f18912042
const Bird = () => {
  const birdRef = useRef();

  //Load the 3D model and animations from the provied GLT file
  const { scene, animations } = useGLTF(birdScene);

  //Get access to the animations for the bird
  const { actions } = useAnimations(animations, birdRef);

  //Play the "Take 001" animation when the component mounts
  // Note: Animation names can be found on the Sketchfab website where the 3D model is hosted.
  useEffect(() => {
    actions['Take 001'].play();
  }, []);

  useFrame(({ clock, camera }) => {
    //birdRef.current.rotation.x += 0.15 * delta
    //to make the bird to move/ fly across the screen, 
    // Update the Y position to simulate the bird-like motion using a sin wave
    birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

    //to move the bird across the island

    //Check if the bird reached a certain endpoint relative to the camera
    if(birdRef.current.position.x > camera.position.x + 10) {
      //Change direction to backward and rotate the bird 180 degrees on the y-axis
      birdRef.current.rotation.y = Math.PI;
    } else if(birdRef.current.position.x < camera.position.x - 10) {
      //change direction to forward and reset the bird's rotation
      birdRef.current.rotation.y = 0;
    }

    //Update the X and Z positions based on the direction
    if (birdRef.current.rotation.y === 0) {
      //Moving forward
      birdRef.current.position.x += 0.01;
      birdRef.current.position.z -= 0.01;
    } else {
      //Moving backward
      birdRef.current.position.x -= 0.01;
      birdRef.current.position.z += 0.01;
    }
  })

  return (
    //mesh, to create and display 3D objects
    <mesh 
      position={[-5, 2, 1]} 
      scale={[0.003, 0.003, 0.003]}
      ref={birdRef}
      >
        
        <primitive object={scene}/>
    </mesh>

    //Use the primitive element when you want to directly embed a complex 3D model or scene
  );

};

export default Bird;