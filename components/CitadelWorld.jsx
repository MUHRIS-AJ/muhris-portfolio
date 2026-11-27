"use client";
import {useRef} from "react";
import {Canvas,useFrame} from "@react-three/fiber";
import {MeshDistortMaterial} from "@react-three/drei";
import * as THREE from "three";
const pillars=[[-8,-4],[-5,-13],[5,-13],[8,-4],[-10,5],[10,5],[-7,-23],[7,-23]];
function World(){
 const jelly=useRef();const ring=useRef();const current=useRef(0);
 useFrame(({camera,clock},dt)=>{
  const max=Math.max(1,document.documentElement.scrollHeight-window.innerHeight);
  const target=window.scrollY/max;
  current.current=THREE.MathUtils.damp(current.current,target,3,dt);
  const t=clock.elapsedTime;const q=current.current;
  camera.position.set(Math.sin(q*Math.PI*2)*3.4,3.3+Math.sin(q*Math.PI)*1.3,12-q*16);
  camera.lookAt(0,2,-8-q*10);camera.rotateZ(Math.sin(q*7)*.045);
  if(jelly.current){jelly.current.rotation.y=t*.15;jelly.current.position.y=3.4+Math.sin(t*.55)*.28;jelly.current.scale.set(1+Math.sin(t*.7)*.09,1-Math.sin(t*.7)*.09,1)}
  if(ring.current)ring.current.rotation.z=t*.07;
 });
 return <>
  <color attach="background" args={["#07130d"]}/><fog attach="fog" args={["#091911",9,42]}/>
  <ambientLight intensity={.7}/><directionalLight position={[-8,12,6]} intensity={2.3} color="#c5e8d0"/>
  <pointLight position={[3,5,-8]} color="#54f59f" intensity={42} distance={25}/>
  <mesh rotation-x={-Math.PI/2} position={[0,-1,-9]}><planeGeometry args={[90,90]}/><meshStandardMaterial color="#142219" roughness={.43} metalness={.55}/></mesh>
  <gridHelper args={[70,35,"#324c39","#203526"]} position={[0,-.98,-9]}/>
  {pillars.map(([x,z],i)=><group key={i} position={[x,0,z]} rotation-z={(i%2?.045:-.045)}>
    <mesh position={[0,-.35,0]}><boxGeometry args={[2.5,1,2.5]}/><meshStandardMaterial color="#526055" roughness={.8}/></mesh>
    <mesh position={[0,3,0]}><cylinderGeometry args={[.75,1,6,8]}/><meshStandardMaterial color="#39483d" roughness={.76} metalness={.22}/></mesh>
    <mesh position={[0,6.1,0]}><boxGeometry args={[2.1,.45,2.1]}/><meshStandardMaterial color="#607064" roughness={.65}/></mesh>
    <mesh position={[.5,2.5,0]}><boxGeometry args={[.055,4.9,.075]}/><meshStandardMaterial color="#8ce1a6" emissive="#399b53" emissiveIntensity={.75}/></mesh>
  </group>)}
  {[0,1,2].map(i=><mesh key={i} position={[0,5.9,-9-i*8]}><torusGeometry args={[5.5,.3,10,64,Math.PI]}/><meshStandardMaterial color="#506353" metalness={.65} roughness={.43}/></mesh>)}
  <mesh ref={ring} position={[0,3.3,-10]} rotation={[.2,.1,0]}><torusGeometry args={[2.6,.06,10,70]}/><meshStandardMaterial color="#caffde" emissive="#68b989" emissiveIntensity={.65}/></mesh>
  <mesh ref={jelly} position={[0,3.4,-10]}><sphereGeometry args={[1.65,48,32]}/><MeshDistortMaterial color="#b9f6d0" roughness={.09} metalness={.22} transparent opacity={.72} distort={.37} speed={1.1}/></mesh>
  {Array.from({length:13},(_,i)=><mesh key={i} position={[Math.sin(i*2.1)*11,.7+(i%4)*.6,-4-i*2.2]} rotation={[i*.7,i*.9,i*.3]}><dodecahedronGeometry args={[.18+(i%3)*.12,0]}/><meshStandardMaterial color="#708d7a" roughness={.45} metalness={.5}/></mesh>)}
 </>;
}
export default function CitadelWorld(){return <Canvas dpr={[1,1.35]} camera={{position:[0,3.3,12],fov:53,near:.1,far:90}} gl={{antialias:true,powerPreference:"low-power"}} fallback={null}><World/></Canvas>}
