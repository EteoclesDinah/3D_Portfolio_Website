import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Loader from '../components/Loader';
import Island from '../models/Island';
import Sky from '../models/Sky';
{/*<div className='absolute top-28 left-0 right-0 z-0 flex items-center justify-center'>
        popup
      </div>*/}

const Home = () => {

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

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();

  return (
    <section className='w-full h-screen relative'>
      
      <Canvas 
      className='q-full h-screen bg-transparent'
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

        <Sky />

        <Island 
          position = {islandPosition}
          scale = {islandScale}
          rotation = {islandRotation}
        />
        </Suspense>
      </Canvas>


    </section>
    
  )
}

export default Home


//suspense is used as a wrapper and used for rendering loading screen
//directional light -  simulates the light coming from a distant source, like sun
//ambient light - illuminates all object in the scene equally, without casting shadows
//point light - emits lights in all direction from a single point
//spotlight - similar to point light, in a sense it emits light from a one direction, in a shape of a cone
//hemispherelight - iluminates the scene with a gradient
//Island is not a primitive element, as it contains lots of meshes, but our sky is gonna be primitive.
//no use of regular cloud image, because as we gonna rotate through the scene, clouds are gonna rotate too, giving 3d feels
