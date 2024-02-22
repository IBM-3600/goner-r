import React, { Component } from 'react'
import * as THREE  from 'three'
export class Box extends Component {
     geometry = new THREE.BoxGeometry(1,1,1);
     material = new THREE.MeshStandardMaterial({color:"blue"});
     mesh = new THREE.Mesh(this.geometry,this.material)

  render() {
    return (
      <mesh/>
    )
  }
}

export default Box