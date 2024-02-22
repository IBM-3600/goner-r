import React, { useEffect} from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Mesh } from 'three';
const GLTFLoaderComponent = () => {
  const gltfModel = useLoader(GLTFLoader,process.env.PUBLIC_URL + "public/assets/uploads_files_2043961_Mercedes+S63+AMG+Coupe+2019+-+Black.gltf");
  
 
  useEffect(()=>{
      
        
    gltfModel.scene.traverse((object)=>{
      if(object instanceof Mesh){
          object.castShadow = true;
          object.receiveShadow = true;
          object.material.envMapIntensity=20
      }
    })
  },[gltfModel])
  return <primitive object={gltfModel.scene}/>
};

export default GLTFLoaderComponent;