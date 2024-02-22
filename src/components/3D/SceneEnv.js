import React from 'react'

import Box from './Box2';
function SceneEnv() {
  return (
    <>
     <Lighting/>
     <ThreeDOjects/>
    </>
  )
}
function Lighting(){
    return(<>
     <ambientLight intensity={0.1}  />
        <directionalLight color="white" position={[0, 0, 5]} />
    </>)
}
function ThreeDOjects(){
    return(<>
    <mesh position={[0,2,0]} scale={[3,3,3]}>
         <boxGeometry/>
         <meshStandardMaterial color={'#00ff00'} />
        </mesh> 
        <mesh position={[0,-3,0]} scale={[10,10,10]} rotation={[Math.PI/-2,0,0]} >
         <planeGeometry/>
         <meshStandardMaterial color={'#00ff00'} />
        </mesh> 
        <Box size={[2, 2, 2]} color={0xff0000}/>
    </>)
}
export default SceneEnv