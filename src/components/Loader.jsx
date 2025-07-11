import React from 'react'
import { Html } from '@react-three/drei'

const Loader = () => {
  return (
    <Html>
        <div className='flex justify-center items-center'>
            <div className='w-20 h-20 border-2 border-opacity-20 border-blue-500 border-t-blue-500 rounded-full animate-spin'>

            </div>
        </div>
    </Html>
    
  )
}

export default Loader

//top convert stg not 3D into #D we need to use "react drei", so as not to have any issues with the 3D cameras