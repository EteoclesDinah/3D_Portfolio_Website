import React, { useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Loader from '../components/Loader';
import Island from '../models/Island';
import Sky from '../models/Sky';
import Bird from '../models/Bird';
import Plane from '../models/Plane';
import HomeInfo from '../components/HomeInfo';

import sakura from '../assets/sakura.mp3';
import { soundoff, soundon } from '../assets/icons';

const Home = () => {

  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    if(isPlayingMusic) {
      audioRef.current.play();
    }
    return () => {
      audioRef.current.pause();
    }
  })
  
  const [currentStage, setCurrentStage] = useState(1);


  const [isRotating, setIsRotating] = useState(false);
  
  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];

    if(window.innerWidth < 768 ) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPosition, rotation]
  }

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;

    //If screen width is less tha 780px, adjust scale and position
    if(window.innerWidth < 768 ) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  }

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();

  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  return (
    <section className='w-full h-screen relative'>
      
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      <Canvas 
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{near: 0.1, far: 1000}}     //object nearer than 0.1 and farther from 1000 from camera won't be rendered
      > 
        <Suspense fallback={<Loader />}>
        <directionalLight
          position={[1, 1, 1]}
          intensity={2}        
        />
        <ambientLight intensity={0.5} />
        <pointLight />
        <spotLight />
        <hemisphereLight 
          skyColor="#b1e1ff"
          groundColor={"#000000"}
          intensity={1}
        />

        <Bird />
        <Sky 
          isRotating = {isRotating}
        />

        <Island 
          isRotating = {isRotating}
          setIsRotating = {setIsRotating}
          setCurrentStage={setCurrentStage}
          position = {islandPosition}
          scale = {islandScale}
          rotation = {islandRotation}
          
        />

        <Plane 
          isRotating = {isRotating}
          scale = {planeScale}
          position = {planePosition}
          rotation = {[0, 20, 0]}
        />
        </Suspense>
      </Canvas>

      <div className='absolute bottom-2 left-2'>
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt='sound'
          
          className='w-10 h-10 cursor-pointer object-contain'
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
        />
      </div>
    </section>
    
  );
};

export default Home;


//suspense is used as a wrapper and used for rendering loading screen
//directional light -  simulates the light coming from a distant source, like sun
//ambient light - illuminates all object in the scene equally, without casting shadows
//point light - emits lights in all direction from a single point
//spotlight - similar to point light, in a sense it emits light from a one direction, in a shape of a cone
//hemispherelight - iluminates the scene with a gradient
//Island is not a primitive element, as it contains lots of meshes, but our sky is gonna be primitive.
//no use of regular cloud image, because as we gonna rotate through the scene, clouds are gonna rotate too, giving 3d feels
