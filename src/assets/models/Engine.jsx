/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 Engine.gltf 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/Engine.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[0.403, -0.225, -0.83]} rotation={[Math.PI / 2, 0, 0]} scale={[0.004, 0.005, 0.005]}>
        <group position={[85.087, -4.453, 86.894]} rotation={[0, 0.071, -Math.PI / 2]} scale={[0.776, 1.043, 0.902]}>
          <mesh geometry={nodes.Gearbox.geometry} material={materials['01 - Default3']} position={[-24.608, -185.514, 17.744]} rotation={[0.083, 0, Math.PI / 2]} scale={[2.683, 2.778, 2.404]} />
          <mesh geometry={nodes.Tubes.geometry} material={materials['07 - Default']} position={[66.348, -156.709, 34.764]} rotation={[0.083, 0, Math.PI / 2]} scale={[2.683, 2.778, 2.404]} />
          <group position={[-37.636, -196.176, -44.021]} rotation={[0.083, 0, Math.PI / 2]} scale={[2.683, 2.778, 2.404]}>
            <mesh geometry={nodes.Cylinder_1.geometry} material={materials['07 - Default']} />
            <mesh geometry={nodes.Cylinder_4.geometry} material={materials['Matt Chrome3']} />
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
              <mesh geometry={nodes.B4_1_3.geometry} material={materials['03 - Default']} position={[-57.584, 61.608, -34.16]} scale={[2.5, 2.155, 2.155]} />
              <mesh geometry={nodes.B4_1_2.geometry} material={materials['03 - Default']} position={[-9.968, 44.638, -15.349]} scale={[2.5, 2.155, 2.155]} />
              <mesh geometry={nodes.B4_1.geometry} material={materials['03 - Default']} position={[19.168, 35.961, -28.029]} scale={[2.5, 2.155, 2.155]} />
              <mesh geometry={nodes.B3_2.geometry} material={materials['03 - Default']} position={[68.167, -1.464, 58.214]} scale={[2.5, 2.155, 2.155]} />
              <mesh geometry={nodes.B3_1.geometry} material={materials['03 - Default']} position={[96.946, 28.099, 0.842]} scale={[2.5, 2.155, 2.155]} />
            </group>
            <group position={[-386.675, -16.466, 73.459]}>
              <mesh geometry={nodes.B2_1_5.geometry} material={materials['03 - Default']} position={[0.473, -48.59, -73.505]} scale={[2.5, 2.155, 2.155]} />
              <mesh geometry={nodes.B2_1_4.geometry} material={materials['03 - Default']} position={[-0.569, -69.489, -28.386]} scale={[2.5, 2.155, 2.155]} />
              <mesh geometry={nodes.B2_1_3.geometry} material={materials['03 - Default']} position={[-0.064, -25.561, 64.765]} scale={[2.5, 2.155, 2.155]} />
              <mesh geometry={nodes.B2_1_2.geometry} material={materials['03 - Default']} position={[0.391, 56.434, 69.43]} scale={[2.5, 2.155, 2.155]} />
              <mesh geometry={nodes.B2_1_1.geometry} material={materials['03 - Default']} position={[-2.552, 79.333, -87.4]} scale={[2.5, 2.155, 2.155]} />
            </group>
            <group position={[-156.612, 46.765, 59.343]}>
              <mesh geometry={nodes.B1_1_2.geometry} material={materials['03 - Default']} position={[155.978, 27.686, -32.833]} scale={[2.5, 2.155, 2.155]} />
              <mesh geometry={nodes.B1_1_1.geometry} material={materials['03 - Default']} position={[130.699, 35.159, -0.158]} scale={[2.5, 2.155, 2.155]} />
              <mesh geometry={nodes.B1_1_2_2.geometry} material={materials['03 - Default']} position={[98.502, 34.747, 0.9]} scale={[2.5, 2.155, 2.155]} />
              <mesh geometry={nodes.B1_1_3.geometry} material={materials['03 - Default']} position={[78.767, 34.515, 1.849]} scale={[2.5, 2.155, 2.155]} />
              <mesh geometry={nodes.B1_1_4.geometry} material={materials['03 - Default']} position={[57.703, 37.577, 2.516]} scale={[2.5, 2.155, 2.155]} />
              <mesh geometry={nodes.B1_1_5.geometry} material={materials['03 - Default']} position={[38.116, 34.127, 5.859]} scale={[2.5, 2.155, 2.155]} />
              <mesh geometry={nodes.B1_1_6.geometry} material={materials['03 - Default']} position={[21.088, 36.394, 9.209]} scale={[2.5, 2.155, 2.155]} />
              <mesh geometry={nodes.B1_1_7.geometry} material={materials['03 - Default']} position={[1.423, -90.406, -63.076]} scale={[2.5, 2.155, 2.155]} />
              <mesh geometry={nodes.B1_1_8.geometry} material={materials['03 - Default']} position={[-23.602, 4.304, -61.924]} scale={[2.5, 2.155, 2.155]} />
              <mesh geometry={nodes.B1_1_9.geometry} material={materials['03 - Default']} position={[-41.748, 5.741, -64.331]} scale={[2.5, 2.155, 2.155]} />
              <mesh geometry={nodes.B1_1_10.geometry} material={materials['03 - Default']} position={[-58.937, -118.223, -27.938]} scale={[2.5, 2.155, 2.155]} />
              <mesh geometry={nodes.B1_1_11.geometry} material={materials['03 - Default']} position={[-77.933, -106.269, -40.567]} scale={[2.5, 2.155, 2.155]} />
              <mesh geometry={nodes.B1_1_12.geometry} material={materials['03 - Default']} position={[-98.951, 28.967, 23.467]} scale={[2.5, 2.155, 2.155]} />
              <mesh geometry={nodes.B1_1_13.geometry} material={materials['03 - Default']} position={[-117.529, 28.829, 23.924]} scale={[2.5, 2.155, 2.155]} />
            </group>
          </group>
          <group position={[5.357, 4.016, 19.474]}>
            <mesh geometry={nodes.Stationary_Wings_1.geometry} material={materials['01 - Default2']} position={[-95.835, 0, 0]} scale={[2.5, 2.155, 2.155]} />
            <mesh geometry={nodes.Null.geometry} material={materials['07 - Default']} position={[-523.633, 0.261, -0.723]} scale={[2.5, 2.155, 2.155]} />
            <mesh geometry={nodes.Cloner_1_1.geometry} material={materials['Matt Chrome2']} position={[-309.143, 0, 0]} scale={[2.5, 2.155, 2.155]} />
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
            <mesh geometry={nodes.Boole_4.geometry} material={materials['07 - Default3']} />
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
  )
}

useGLTF.preload('/Engine.gltf')
