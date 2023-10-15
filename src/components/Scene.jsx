import {PerspectiveCamera } from "@react-three/drei";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";
import { useLoader, useThree, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Vector3 } from "three";
import { Select} from '@react-three/postprocessing'
import { useGLTF } from '@react-three/drei'

export const Loader = ({ meshName, boxRef,orbitRotation },props) => {
  const gltf = useLoader(GLTFLoader, "/assets/models/Engine.gltf");
  const [mesh, setMesh] = useState(null);
  const [selectedMeshName, setSelectedMeshName] = useState(null);
  const { camera,scene,raycaster } = useThree();
  const selectedObjectRef = useRef(null);
  const ref = useRef(null);
  const { nodes, materials } = useGLTF('/assets/models/Engine.gltf')
 
  const clickMouse = new THREE.Vector2();  // create once
  const draggable = useRef(null);
     function intersect(pos) {
         raycaster.setFromCamera(pos, camera);
         return raycaster.intersectObjects(scene.children, true);
       }
       let initialPosition = null;
      //  let initialScale = null 
       function onClick(event){
       // let changePosition;
       if (draggable.current != null) {
        //if(found.length){}
        console.log(`dropping draggable`)
        if (initialPosition !== null) {
          draggable.current.position.y = initialPosition.y;
          initialPosition = null;
        }
        
        draggable.current = null;
        return;
      }
      
    
      // THREE RAYCASTER
      clickMouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      clickMouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    
      const found = intersect(clickMouse);
      // console.log(found[0])
      for (let i = 0; i < found.length; i++) {
        console.log(found[i].object)
      }
      
      console.log(found.length)
      if (found.length > 0) {
          draggable.current = found[0].object
          console.log(`found draggable`)
          console.log('draggable',draggable.current)
          // initialPosition = draggable.current.position.clone();
          // changePosition = initialPosition.add(new THREE.Vector3(0, 8, 0))
         
            initialPosition = draggable.current.position.clone();
            // Change the position of the mesh when picked up
            draggable.current.position.y += 20;
            console.log(initialPosition)
            //console.log(changePosition)
          
          // if(draggable.current.userData.name.startsWith('B')){
          //   initialPosition = draggable.current.position.clone();
          //   // Change the position of the mesh when picked up
          //   draggable.current.position.y += 20;
          //   console.log(initialPosition)
          //   console.log(changePosition)
          // }
          
          // outlineMesh.position.copy(draggable.current.position);
          // outlineMesh.scale.set(10.05, 10.05, 10.05); // Slightly larger scale for the outline
          // scene.add(outlineMesh);
    
          // Update the color of the selected object
          // const newColor = new THREE.Color(0, 0.6, 0.7);
          // draggable.current.material.color.copy(newColor);
          // focusCameraOnObject(draggable.current)
      }
      }


  const focusCameraOnObject = (objectToFocus) => {
    if (objectToFocus) {
      // const distance = 1; // Adjust the initial distance as needed for the desired zoom level
      let targetPosition ;
      if(meshName==='B1_1_1' || meshName==='B1_1_2'|| meshName==='B1_1_2_2'){
        targetPosition = objectToFocus.position.clone().add(new THREE.Vector3(-158, 8, 100));
      }
      else{
        targetPosition = objectToFocus.position.clone();
      }
      const duration = 1200; // Animation duration in milliseconds
      const startTime = performance.now(); // Record the start time
      // Function to update camera position and orientation
      const initialCameraPosition = camera.position.clone();
      const initialFov = camera.fov;
      const updateCamera = () => {
        const currentTime = performance.now();
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1); // Ensure progress is between 0 and 1

        // Interpolate camera position
        camera.position.lerp(targetPosition, progress);

        camera.lookAt(targetPosition);
        // camera.lookAt(targetPosition);
       camera.fov = 4; 

        if (progress < 1) {
          requestAnimationFrame(updateCamera);
        }

      };
      // Start the animation
      updateCamera();      
    }
  };



  // const focusCameraOnObject = (objectToFocus) => {
  //   if (objectToFocus) {
  //     const backwardDistance = 70; // Adjust the distance as needed for the desired zoom level
  
  //     // Calculate the target position to focus on the backside of the object
  //     const targetPosition = new THREE.Vector3();
  //     objectToFocus.getWorldPosition(targetPosition);
  //     const backwardVector = objectToFocus.getWorldDirection(new THREE.Vector3()).multiplyScalar(-backwardDistance);
  //     targetPosition.add(backwardVector);
  
  //     const duration = 1200; // Animation duration in milliseconds
  //     const startTime = performance.now(); // Record the start time
  

  
  //     // Function to update camera position and orientation
  //     const updateCamera = () => {
  //       const currentTime = performance.now();
  //       const elapsed = currentTime - startTime;
  //       const progress = Math.min(elapsed / duration, 1); // Ensure progress is between 0 and 1
  
  //       // Interpolate camera position
  //       // camera.position.lerp(backwardVector, progress);
  //       camera.position.lerp(targetPosition, progress);
  
  //       // Update camera orientation to look at the object
  //       camera.lookAt(objectToFocus.position);
  
  //       // Interpolate FOV (optional)
  //       //camera.fov = initialFov + (4 - initialFov) * progress;
  //       camera.fov = 4;
  //       // If the animation is not finished, request the next frame
  //       if (progress < 1) {
  //         requestAnimationFrame(updateCamera);
  //       }
  //     };
  
  //     // Start the animation
  //     updateCamera();
  //   }
  // };

  const useFullChildrens = gltf.scene.children[0].children[3].children[0].children;
  // console.log(gltf.scene.children[0].children[3].children[0].children[2])
  // console.log(gltf.scene.children[0].children[3].children[0])
  //console.log(useFullChildrens);
  // console.log(gltf)
// console.log(gltf.scene.children[0].children[3].children[0])
// console.log(gltf.scene.children[0].children[3].children[0].name)
  //console.log(gltf.scene.children[0].children[3].children[0].children)




  useEffect(() => {


    if (meshName !== "") {
      var childrens;
      if (meshName.startsWith("B1")) {
        // childrens =gltf.scene.children[0].children[3].children[0].children[2].children;
    
        childrens =gltf.scene.children[0].children[3].children[0].children[2].children;
        //console.log(meshName);
      } else if (meshName.startsWith("B2")) {
        childrens =
          gltf.scene.children[0].children[3].children[0].children[1].children;
      } else if (meshName.startsWith("B3") || meshName.startsWith("B4")) {
        childrens =
          gltf.scene.children[0].children[3].children[0].children[0].children;
      }

      const mesh = childrens.find((mesh) => mesh.name === meshName);
      //setMesh(meshFound)
      if (mesh) {
        // Do something with the found mesh, e.g., manipulate it
        //console.log("Found mesh:", mesh);
        selectedObjectRef.current = mesh;  
        console.log(mesh)
        focusCameraOnObject(mesh);
        const box = boxRef.current;
        box.style.display = "block";
        // const effect  = new THREE.
        setSelectedMeshName(meshName);
        // console.log(`${selectedObjectRef.current.mesh}`);
      //  console.log("mesh: ",selectedObjectRef.current);
      console.log(meshName)
      } else {
        console.log("Mesh not found");
      }
    }

  }, [meshName,orbitRotation]);

useEffect(() => {
  window.addEventListener('click',onClick)

  return () => {
    window.removeEventListener('click', onClick);
  } 
}, [onClick])

  return (
    <>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
      {/* <Select enabled={false}>
          <primitive  object={gltf.scene.children[0].children[3].children[0].children[0]} />
          <primitive  object={gltf.scene.children[0].children[3].children[0].children[1]} />
          <primitive  object={gltf.scene.children[0].children[3].children[0].children[2]} />
          <primitive  object={gltf.scene} />
      </Select> */}
      
<group {...props} dispose={null}>
      <group position={[0.403, -0.225, -0.83]} rotation={[Math.PI / 2, 0, 0]} scale={[0.004, 0.005, 0.005]}>
        <group position={[85.087, -4.453, 86.894]} rotation={[0, 0.071, -Math.PI / 2]} scale={[0.776, 1.043, 0.902]}>
          <mesh geometry={nodes.Gearbox.geometry} material={materials['01 - Default3']} position={[-24.608, -185.514, 17.744]} rotation={[0.083, 0, Math.PI / 2]} scale={[2.683, 2.778, 2.404]} />
          <mesh geometry={nodes.Tubes.geometry} material={materials['07 - Default']} position={[66.348, -156.709, 34.764]} rotation={[0.083, 0, Math.PI / 2]} scale={[2.683, 2.778, 2.404]} />
          <group position={[-37.636, -196.176, -44.021]} rotation={[0.083, 0, Math.PI / 2]} scale={[2.683, 2.778, 2.404]}>
            <mesh geometry={nodes.Cylinder_1.geometry} material={materials['07 - Default']} />
            {/* <mesh geometry={nodes.Cylinder_4.geometry} material={materials['Matt Chrome3']} /> */}
          </group>
          <mesh geometry={nodes.Cloner.geometry} material={materials['Matt Chrome']} position={[100.672, -251.55, -8.423]} rotation={[0.083, 0, Math.PI / 2]} scale={[2.683, 2.778, 2.404]} />
          <mesh geometry={nodes['8'].geometry} material={materials['Matt Chrome3']} position={[36.561, -193.577, 6.066]} rotation={[0.083, 0, Math.PI / 2]} scale={[2.683, 2.778, 2.404]} />
        </group>
        <group position={[-228.938, -8.626, -23.383]}>
          <mesh geometry={nodes.Volume_Mesher.geometry} material={materials['07 - Default']} position={[516.98, -12.576, 21.863]} scale={[2.5, 2.155, 2.155]} />
        </group>
        <group position={[-300.109, 2.823, -22.473]}>
          <group position={[-124.398, 0, 0]} scale={[1.4, 1, 1]}>
            <mesh geometry={nodes['7'].geometry} material={materials['07 - Default']} position={[-105.214, 0, 0]} scale={[1.786, 2.155, 2.155]} />
            <mesh geometry={nodes['6'].geometry} material={materials['07 - Default']} position={[-88.642, 0, 0]} scale={[1.786, 2.155, 2.155]} />
            <mesh geometry={nodes['5'].geometry} material={materials['07 - Default']} position={[-73.414, 0, 0]} scale={[1.786, 2.155, 2.155]} />
            <mesh geometry={nodes['4'].geometry} material={materials['07 - Default']} position={[-57.607, 0, 0]} scale={[1.786, 2.155, 2.155]} />
            <mesh geometry={nodes['3'].geometry} material={materials['07 - Default']} position={[-41.629, 0, 0]} scale={[1.786, 2.155, 2.155]} />
            <mesh geometry={nodes['2'].geometry} material={materials['07 - Default']} position={[-5.676, 0, 0]} scale={[1.786, 2.155, 2.155]} />
            <mesh geometry={nodes['1'].geometry} material={materials['07 - Default']} position={[3.649, 0, 0]} scale={[1.786, 2.155, 2.155]} />
            <mesh geometry={nodes['015'].geometry} material={materials['07 - Default']} position={[22.65, 0, 0]} scale={[1.786, 2.155, 2.155]} />
          </group>
          <mesh geometry={nodes.Cloner_2.geometry} material={materials['07 - Default']} position={[-296.49, 0, 0]} scale={[2.524, 2.176, 2.176]} />
          <mesh geometry={nodes.Stationary_Wing.geometry} material={materials['01 - Default2']} position={[-177.745, 0, 0]} scale={[2.5, 2.155, 2.155]} />
          <mesh geometry={nodes.Cloner_3.geometry} material={materials['Matt Chrome']} position={[-78.006, 0, 0]} scale={[2.5, 2.155, 2.155]} />
          <mesh geometry={nodes.Cloth_Surface_Null.geometry} material={materials['07 - Default']} position={[124.973, 0, 0]} scale={[2.5, 2.155, 2.155]} />
          <mesh geometry={nodes.Cylinder_2.geometry} material={materials['07 - Default']} position={[-5.412, 0, 0]} scale={[2.5, 2.155, 2.155]} />
        </group>
        <group position={[21.885, -1.193, -41.947]}>
          <group position={[51.023, 0, -39.692]}>
            <group position={[-553.087, 72.37, 74.138]}>
            <Select enabled={meshName ==='B4_1_3'?true:false}>
              <mesh geometry={nodes.B4_1_3.geometry} material={materials['03 - Default']} position={[-57.584, 61.608, -34.16]} scale={[2.5, 2.155, 2.155]} />
              </Select>
              <Select enabled={meshName ==='B4_1_2'?true:false}>
              <mesh geometry={nodes.B4_1_2.geometry} material={materials['03 - Default']} position={[-9.968, 44.638, -15.349]} scale={[2.5, 2.155, 2.155]} />
              </Select>
              <Select enabled={meshName ==='B4_1'?true:false}>
              <mesh geometry={nodes.B4_1.geometry} material={materials['03 - Default']} position={[19.168, 35.961, -28.029]} scale={[2.5, 2.155, 2.155]} />
              </Select>
              <Select enabled={meshName ==='B3_2'?true:false}>
              <mesh geometry={nodes.B3_2.geometry} material={materials['03 - Default']} position={[68.167, -1.464, 58.214]} scale={[2.5, 2.155, 2.155]} />
              </Select>
              <Select enabled={meshName ==='B3_1'?true:false}>
              <mesh userData={{name:'B3'}} geometry={nodes.B3_1.geometry} material={materials['03 - Default']} position={[96.946, 28.099, 0.842]} scale={[2.5, 2.155, 2.155]} />
              </Select>
            </group>
            <group position={[-386.675, -16.466, 73.459]}>
            <Select enabled={meshName ==='B2_1_5'?true:false}>
              <mesh geometry={nodes.B2_1_5.geometry} material={materials['03 - Default']} position={[0.473, -48.59, -73.505]} scale={[2.5, 2.155, 2.155]} />
              </Select>
              <Select enabled={meshName ==='B2_1_4'?true:false}>
              <mesh geometry={nodes.B2_1_4.geometry} material={materials['03 - Default']} position={[-0.569, -69.489, -28.386]} scale={[2.5, 2.155, 2.155]} />
              </Select>
              <Select enabled={meshName ==='B2_1_3'?true:false}>
              <mesh geometry={nodes.B2_1_3.geometry} material={materials['03 - Default']} position={[-0.064, -25.561, 64.765]} scale={[2.5, 2.155, 2.155]} />
              </Select>
              <Select enabled={meshName ==='B2_1_2'?true:false}>
              <mesh geometry={nodes.B2_1_2.geometry} material={materials['03 - Default']} position={[0.391, 56.434, 69.43]} scale={[2.5, 2.155, 2.155]} />
              </Select>
              <Select enabled={meshName ==='B2_1_1'?true:false}>
              <mesh geometry={nodes.B2_1_1.geometry} material={materials['03 - Default']} position={[-2.552, 79.333, -87.4]} scale={[2.5, 2.155, 2.155]} />
              </Select>
            </group>
            <group position={[-156.612, 46.765, 59.343]}>
            <Select enabled={meshName ==='B1_1_2'?true:false}>
              <mesh geometry={nodes.B1_1_2.geometry} material={materials['03 - Default']} position={[155.978, 27.686, -32.833]} scale={[2.5, 2.155, 2.155]} />
              </Select>
              <Select enabled={meshName ==='B1_1_1'?true:false}>
              <mesh geometry={nodes.B1_1_1.geometry} material={materials['03 - Default']} position={[130.699, 35.159, -0.158]} scale={[2.5, 2.155, 2.155]} />
              </Select>
              <Select enabled={meshName ==='B1_1_2_2'?true:false}>
              <mesh geometry={nodes.B1_1_2_2.geometry} material={materials['03 - Default']} position={[98.502, 34.747, 0.9]} scale={[2.5, 2.155, 2.155]} />
              </Select>
              <Select enabled={meshName ==='B1_1_3'?true:false}>
              <mesh geometry={nodes.B1_1_3.geometry} material={materials['03 - Default']} position={[78.767, 34.515, 1.849]} scale={[2.5, 2.155, 2.155]} />
              </Select>
              <Select enabled={meshName ==='B1_1_4'?true:false}>
              <mesh geometry={nodes.B1_1_4.geometry} material={materials['03 - Default']} position={[57.703, 37.577, 2.516]} scale={[2.5, 2.155, 2.155]} />
              </Select>
              <Select enabled={meshName ==='B1_1_5'?true:false}>
              <mesh geometry={nodes.B1_1_5.geometry} material={materials['03 - Default']} position={[38.116, 34.127, 5.859]} scale={[2.5, 2.155, 2.155]} />
              </Select>
              <Select enabled={meshName ==='B1_1_6'?true:false}>
              <mesh geometry={nodes.B1_1_6.geometry} material={materials['03 - Default']} position={[21.088, 36.394, 9.209]} scale={[2.5, 2.155, 2.155]} />
              </Select>
              <Select enabled={meshName ==='B1_1_7'?true:false}>
              <mesh geometry={nodes.B1_1_7.geometry} material={materials['03 - Default']} position={[1.423, -90.406, -63.076]} scale={[2.5, 2.155, 2.155]} />
              </Select>
              <Select enabled={meshName ==='B1_1_8'?true:false}>
              <mesh geometry={nodes.B1_1_8.geometry} material={materials['03 - Default']} position={[-23.602, 4.304, -61.924]} scale={[2.5, 2.155, 2.155]} />
              </Select>
              <Select enabled={meshName ==='B1_1_9'?true:false}>
              <mesh geometry={nodes.B1_1_9.geometry} material={materials['03 - Default']} position={[-41.748, 5.741, -64.331]} scale={[2.5, 2.155, 2.155]} />
              </Select>
              <Select enabled={meshName ==='B1_1_10'?true:false}>
              <mesh geometry={nodes.B1_1_10.geometry} material={materials['03 - Default']} position={[-58.937, -118.223, -27.938]} scale={[2.5, 2.155, 2.155]} />
              </Select>
              <Select enabled={meshName ==='B1_1_11'?true:false}>
              <mesh geometry={nodes.B1_1_11.geometry} material={materials['03 - Default']} position={[-77.933, -106.269, -40.567]} scale={[2.5, 2.155, 2.155]} />
              </Select>
              <Select enabled={meshName ==='B1_1_12'?true:false}>
              <mesh geometry={nodes.B1_1_12.geometry} material={materials['03 - Default']} position={[-98.951, 28.967, 23.467]} scale={[2.5, 2.155, 2.155]} />
              </Select>
              <Select enabled={meshName ==='B1_1_13'?true:false}>
              <mesh geometry={nodes.B1_1_13.geometry} material={materials['03 - Default']} position={[-117.529, 28.829, 23.924]} scale={[2.5, 2.155, 2.155]} />
              </Select>
            </group>
          </group>
          <group position={[5.357, 4.016, 19.474]}>
            <mesh geometry={nodes.Stationary_Wings_1.geometry} material={materials['01 - Default2']} position={[-95.835, 0, 0]} scale={[2.5, 2.155, 2.155]} />
            <mesh geometry={nodes.Null.geometry} material={materials['07 - Default']} position={[-523.633, 0.261, -0.723]} scale={[2.5, 2.155, 2.155]} />
            <mesh geometry={nodes.Cloner_1.geometry} material={materials['Matt Chrome2']} position={[-309.143, 0, 0]} scale={[2.5, 2.155, 2.155]} />
            <mesh geometry={nodes.Null_2.geometry} material={materials['Matt Chrome2']} position={[-345.45, 0.433, -0.119]} scale={[2.5, 2.155, 2.155]} />
            <mesh geometry={nodes.Nuts.geometry} material={materials['Matt Chrome']} position={[-254.432, 0, 0]} scale={[2.5, 2.155, 2.155]} />
            <group position={[-280.77, 0, 0]} scale={[2.5, 2.155, 2.155]}>
              <mesh geometry={nodes.Null_Cloner_1.geometry} material={materials['01 - Default']} />
              <mesh geometry={nodes.Null_Cloner_2.geometry} material={materials['01 - Default2']} />
              <mesh geometry={nodes.Null_Cloner_3.geometry} material={materials['01 - Default23']} />
            </group>
          </group>
          <group position={[-98.473, 4.016, 19.474]}>
            <mesh geometry={nodes['14'].geometry} material={materials['07 - Default']} position={[-131.527, 0, 0]} scale={[2.5, 2.155, 2.155]} />
            <mesh geometry={nodes['13'].geometry} material={materials['07 - Default']} position={[-116.269, 0, 0]} scale={[2.5, 2.155, 2.155]} />
            <mesh geometry={nodes['12'].geometry} material={materials['07 - Default']} position={[-95.974, 0, 0]} scale={[2.5, 2.155, 2.155]} />
            <mesh geometry={nodes['11'].geometry} material={materials['07 - Default']} position={[-75.704, 0, 0]} scale={[2.5, 2.155, 2.155]} />
            <mesh geometry={nodes['10'].geometry} material={materials['07 - Default']} position={[-57.431, 0, 0]} scale={[2.5, 2.155, 2.155]} />
            <mesh geometry={nodes['9'].geometry} material={materials['07 - Default']} position={[-38.128, 0, 0]} scale={[2.5, 2.155, 2.155]} />
            <mesh geometry={nodes['8_2'].geometry} material={materials['07 - Default']} position={[-17.115, 0, 0]} scale={[2.5, 2.155, 2.155]} />
            <mesh geometry={nodes['7_2'].geometry} material={materials['07 - Default']} position={[2.968, 0, 0]} scale={[2.5, 2.155, 2.155]} />
            <mesh geometry={nodes['6_2'].geometry} material={materials['07 - Default']} position={[22.328, 0, 0]} scale={[2.5, 2.155, 2.155]} />
            <mesh geometry={nodes['5_2'].geometry} material={materials['07 - Default']} position={[41.194, 0, 0]} scale={[2.5, 2.155, 2.155]} />
            <mesh geometry={nodes['4_2'].geometry} material={materials['07 - Default']} position={[60.4, 0.054, 0.026]} scale={[2.5, 2.155, 2.155]} />
            <mesh geometry={nodes['3_2'].geometry} material={materials['07 - Default']} position={[82.862, 0, 0]} scale={[2.5, 2.155, 2.155]} />
            <mesh geometry={nodes['2_2'].geometry} material={materials['07 - Default']} position={[104.97, 0, 0]} scale={[2.5, 2.155, 2.155]} />
            <mesh geometry={nodes['1_2'].geometry} material={materials['07 - Default']} position={[135.019, 0, 0]} scale={[2.5, 2.155, 2.155]} />
          </group>
          <mesh geometry={nodes.Cloner_4.geometry} material={materials['07 - Default']} position={[-296.999, 4.016, 19.474]} scale={[2.5, 2.155, 2.155]} />
          <mesh geometry={nodes.Cylinder_3.geometry} material={materials['01 - Default']} position={[-151.903, 4.016, 19.6]} scale={[2.5, 2.155, 2.155]} />
          <mesh geometry={nodes.Cloth_Surface_1.geometry} material={materials['01 - Default']} position={[74.285, 4.016, 19.474]} scale={[2.5, 2.155, 2.155]} />
          <mesh geometry={nodes.Nuts_2.geometry} material={nodes.Nuts_2.material} position={[44.4, -5.115, -55.908]} scale={[2.5, 2.155, 2.155]} />
          <mesh geometry={nodes.Remesh_2.geometry} material={materials['Matt Chrome']} position={[45.381, 0.677, -68.718]} scale={[2.5, 2.155, 2.155]} />
        </group>
        <group position={[193.137, 2.823, -22.473]}>
          <mesh geometry={nodes.Nuts_3.geometry} material={materials['01 - Default2']} position={[-3.147, 0, 0]} scale={[2.5, 2.155, 2.155]} />
          <group position={[37.049, 0, 0]} scale={[2.5, 2.155, 2.155]}>
            <mesh geometry={nodes.Boole_2.geometry} material={materials['07 - Default3']} />
            <mesh geometry={nodes.Boole_3.geometry} material={materials['07 - Default2']} />
            {/* <mesh geometry={nodes.Boole_4.geometry} material={materials['07 - Default3']} /> */}
          </group>
          <mesh geometry={nodes.Boole_1.geometry} material={materials['07 - Default']} position={[37.049, 0, 0]} scale={[2.5, 2.155, 2.155]} />
          <mesh geometry={nodes['4_3'].geometry} material={materials['07 - Default']} position={[-70.337, 0, 0]} scale={[2.5, 2.155, 2.155]} />
          <mesh geometry={nodes.Wing_3.geometry} material={materials['07 - Default']} position={[32.461, 0, 0]} scale={[2.5, 2.155, 2.155]} />
          <mesh geometry={nodes.Wing_1.geometry} material={materials['07 - Default']} position={[108.047, 0, 0]} scale={[2.385, 2.056, 2.056]} />
          <group position={[155.857, -0.107, -0.122]} scale={[2.5, 2.155, 2.155]}>
            <mesh geometry={nodes.Null_3_1.geometry} material={materials['07 - Default']} />
            <mesh geometry={nodes.Null_3_2.geometry} material={materials['07 - Default3']} />
          </group>
        </group>
      </group>
      <mesh geometry={nodes['Cloner_(1)'].geometry} material={materials['02 - Default']} position={[0.22, -0.102, -0.817]} rotation={[1.573, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.Cloner_5.geometry} material={materials['01 - Default2']} position={[0.413, -0.12, -0.817]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.Moving_Wings_2.geometry} material={materials['01 - Default2']} position={[1.248, -0.12, -0.817]} rotation={[Math.PI / 2, 0, Math.PI]} scale={[0.01, -0.01, 0.01]} />
      <mesh geometry={nodes.Stationary_Blades.geometry} material={materials['07 - Default']} position={[1.2, -0.12, -0.817]} rotation={[Math.PI / 2, 0, Math.PI]} scale={[0.01, -0.01, 0.01]} />
    </group>
    </>
  );
};
useGLTF.preload('src/assets/models/Engine.gltf')