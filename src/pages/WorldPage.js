import React,{ Suspense, useEffect }  from 'react'
import { Canvas} from '@react-three/fiber'
import { OrbitControls,PerspectiveCamera } from '@react-three/drei'
import SceneEnv from '../components/3D/SceneEnv.js';
function WorldPage() {
  
  
  const canvasStyle={position:"",top:0,left:0,zindex:0}
  const ParentStyle={position:"relative",width:"100vw",height:"100vh"}
  return (<>
      <div style={ParentStyle}>
       <Suspense fallback={"loading..."}>
        <Canvas style={canvasStyle}>
            <OrbitControls target={[0,0.35,0]} maxPolarAngle={1.45}/>
            <PerspectiveCamera makeDefault fov={50} position={[3,2,5]}/>
            <SceneEnv/>
        </Canvas>
        </Suspense>
        <Screen/>
      </div>
         
       </>
        )
}

function Screen(){
  const ScreenStyle = {background:"#0000",position:"absolute", zindex:100,top:"20px",left:"30px"}
  return(
  <div style={ScreenStyle} >
     Screen 
     <div>
      Screen
     </div>
     <div>
      Screen
     </div>
     <div>
      Screen
     </div>
     <div>
      Screen
     </div>
     <div>
      Screen
     </div>
     <div>
      Screen
     </div>
  </div>
  )
}
export default WorldPage