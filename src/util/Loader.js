import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import {React} from 'react';
const Loader={}
Loader.GLTF = function({name,url}) {
   // var gltfloader = new GLTFLoader();
   // var obj = new THREE.Object3D();
   // const gltfModel = useLoader(GLTFLoader,'./../..assets/landscape31.gltf')
   // try{
    // gltfloader.load('./../..assets/landscape31.gltf',(gltf)=>{
    // var root = gltf.scene;
    // var pl = root.getObjectByName(name);
    // pl.getWorldPosition(obj.position);
    // pl.position.set(4,4,4);
    //  obj.add(pl);
    //  console.log("gltf loaded")
    // })
   // }
   // catch(e){console.log("fail to load GLTF file =>"+ e)}
   
  return (<primitive object={gltfModel.scene}/>);
}
Loader.OBJ=function(){}

export default Loader;