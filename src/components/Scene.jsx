import {PerspectiveCamera } from "@react-three/drei";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";
import { useLoader, useThree, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Vector3 } from "three";
import { Select} from '@react-three/postprocessing'
// import { Outline } from "@react-three/postprocessing";

export const Loader = ({ meshName, boxRef }) => {
  const gltf = useLoader(GLTFLoader, "/assets/models/Engine.gltf");
  const [mesh, setMesh] = useState(null);
  const [selectedMeshName, setSelectedMeshName] = useState(null);
  const { camera } = useThree();
  const selectedObjectRef = useRef(null);
  const ref = useRef(null);

  const findMeshByName = (name) => {
    const findMeshRecursive = (object, name) => {
      if (object.name === name && object.isMesh) {
        return object;
      }
      for (const child of object.children) {
        const found = findMeshRecursive(child, name);
        if (found) return found;
      }
      return null;
    };

    return findMeshRecursive(gltf.scene, name);
  };

  const focusCameraOnObject = (objectToFocus) => {
    if (objectToFocus) {
      const distance = 1; // Adjust the initial distance as needed for the desired zoom level
      // const targetPosition = objectToFocus.position.clone().add(new THREE.Vector3(0, 0, distance));
      const targetPosition = objectToFocus.position.clone();
      const duration = 1200; // Animation duration in milliseconds
      const startTime = performance.now(); // Record the start time
      //console.log(objectToFocus.material);
      // Function to update camera position and orientation
      const updateCamera = () => {
        const currentTime = performance.now();
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1); // Ensure progress is between 0 and 1

        // Interpolate camera position
        camera.position.lerp(targetPosition, progress);

        // Update camera orientation
        camera.lookAt(objectToFocus.position);
        camera.fov = 4; // Set the desired FOV here
        const newColor = new THREE.Color(4, 6, 8); // Replace with your desired color
        // objectToFocus.material.color.copy(newColor);
        objectToFocus.material.color.r = 0.5
        objectToFocus.material.color.g = 0.5
        objectToFocus.material.color.b = 0.5
        // console.log('r',objectToFocus.material.color.r)
        // console.log('g',objectToFocus.material.color.g)
        // console.log('b',objectToFocus.material.color.b)
        objectToFocus.material.needsUpdate = true;
        // If the animation is not finished, request the next frame
        if (progress < 1) {
          requestAnimationFrame(updateCamera);
        }
      };
      // Start the animation
      updateCamera();
    }
  };

  // Event handler for button click

  const useFullChildrens =
    gltf.scene.children[0].children[3].children[0].children;
  // console.log(gltf.scene.children[0].children[3].children[0].children[2].children)
  //console.log(useFullChildrens);
  // console.log(gltf.scene.children)

  useEffect(() => {
    if (meshName !== "") {
      var childrens;
      if (meshName.startsWith("B1")) {
        childrens =
          gltf.scene.children[0].children[3].children[0].children[2].children;
        console.log(meshName);
      } else if (meshName.startsWith("B2")) {
        childrens =
          gltf.scene.children[0].children[3].children[0].children[1].children;
      } else if (meshName.startsWith("B3") || meshName.startsWith("B4")) {
        childrens =
          gltf.scene.children[0].children[3].children[0].children[0].children;
      }

      const mesh = childrens.find((mesh) => mesh.name === meshName);
      if (mesh) {
        // Do something with the found mesh, e.g., manipulate it
        //console.log("Found mesh:", mesh);
        focusCameraOnObject(mesh);
         selectedObjectRef.current = mesh;  
        const box = boxRef.current;
        box.style.display = "block";
        // const effect  = new THREE.
        setSelectedMeshName(meshName);
        // console.log(`${selectedObjectRef.current.mesh}`);
      //  console.log("mesh: ",selectedObjectRef.current);
      } else {
        console.log("Mesh not found");
      }
    }
  }, [meshName]);

// console.log(gltf.nodes[meshName])
// console.log(gltf)
  return (
    <>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
      {/* Add your 3D scene objects here */}
      {/* <primitive object={gltf.scene} /> */}
      <Select enabled={meshName !== ""}>
          <primitive  object={gltf.scene} />
      </Select>

    </>
  );
};
