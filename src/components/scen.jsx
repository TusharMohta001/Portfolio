import React, { useRef } from 'react'
import { useTexture } from '@react-three/drei'
import * as THREE from "three"
import { useFrame } from '@react-three/fiber';
import gsap from 'gsap';


const Scen = () => {
    

  let tex = useTexture("./src/images/Frame 1 (3).png");

  let rotationX;
  let rotationY;

  let cul = useRef(null);

  useFrame((state,delta)=>{
    cul.current.rotation.y += delta;
  });
  return (
    <group rotation={[0, 1.4, 0.5]}>
    <mesh ref={cul}   >
    <cylinderGeometry  args={[1, 1, 1 ,60, 60, true]} />
    <meshStandardMaterial map={tex} transparent side={THREE.DoubleSide}  />
  </mesh>
    </group>
  )
}

export default Scen