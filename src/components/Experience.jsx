import { useGLTF } from '@react-three/drei'
import React, { useRef,useState,useEffect } from 'react'
//import modelPath from 'src/assets/gltf/modelTest.gltf'
import { useFrame } from '@react-three/fiber';
import { Canvas } from '@react-three/fiber'

export const Experience = (props) => {

  //const groupRef = useRef()
  //const { nodes, materials } = useGLTF('src/assets/gltf/modelTest.gltf')
  const modelPath1 ='src/assets/gltf/1/chairDesk.glb'
  const modelPath2='src/assets/gltf/1/bathtub.glb'
  // const { scene } = useGLTF(modelPath)
  const scene1 = useGLTF(modelPath1)
  const scene2 = useGLTF(modelPath2)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const sphereRef = useRef();
  const canvasRef = useRef();
  useEffect(() => {
    const handleMouseMove = (event) => {
      // Get normalized mouse coordinates (-1 to 1)
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      setMousePosition({ x, y });
    };

    canvasRef.current.addEventListener('mousemove', handleMouseMove);

    return () => {
      canvasRef.current.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);



  useFrame(() => {
    const { x, y } = mousePosition;
    sphereRef.current.position.x = x * 5; // Adjust the multiplier as needed
    sphereRef.current.position.y = y * 5; // Adjust the multiplier as needed
  });


  return (
    <mesh>
      
      <primitive {...props} object={scene1.scene} ef={sphereRef} args={[1, 32, 32]} position={[0, 0, 0]}  scale={5}/>
      {/* <primitive {...props} object={scene2.scene} scale={5}/> */}
    </mesh>

  )
  
  // return (
  //   <>
  //     <group ref={groupRef} {...props} dispose={null}>
  //       <mesh castShadow receiveShadow geometry={nodes.Curve007_1.geometry} material={materials['Material.001']} />
  //       <mesh castShadow receiveShadow geometry={nodes.Curve007_2.geometry} material={materials['Material.002']} />
  //     </group>

  //   </>
  // )
}