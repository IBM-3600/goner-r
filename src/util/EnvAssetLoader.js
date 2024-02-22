//import data from '../data/env-manifest.json'

// import Loader from './Loader';
// const data =require('../data/env-manifest.json')
// console.log(data);
// const LoadedAssets =[];
// data.assets.map((asset)=>{
//    var Ext = asset.extension;
   
//    switch(Ext){
//     case 'gltf':
//         LoadedAssets.push({obj:Loader.GLTF(`${asset.asset_root_path}${asset.path}`),pos:asset.pos})
//         break;

//         default:
//           return'file wrongly loaded';
//     }
//     return null;
// })

// export default LoadedAssets;
import React, { Component, useEffect} from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Mesh } from 'three';

const GLTFLoaderComponent=({assetname}) => {
  const gltfModel = useLoader(GLTFLoader,`assets/${assetname}.gltf`);
  
 
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
}
const OBJLoaderComponent =()=>{

}
export {GLTFLoaderComponent,OBJLoaderComponent};