import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { useLoader } from '@react-three/fiber'
import React, { useMemo } from 'react'
import { Mesh } from 'three'
import { useTexture } from '@react-three/drei'
export const ObjModel = () => {
    const obj = useLoader(OBJLoader, 'src/assets/obj/chairDesk.obj')
    const texture = useTexture("src/assets/obj/chairDesk.png");
    const geometry = useMemo(() => {
      let g;
      obj.traverse((c) => {
        if (c.type === "Mesh") {
          const _c = c;
          g = _c.geometry;
        }
      });
      return g;
    }, [obj]);

    return (
        <mesh geometry={geometry} scale={2}>
          <meshPhysicalMaterial map={texture} />
        </mesh>
      );
}