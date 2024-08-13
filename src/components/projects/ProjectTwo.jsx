/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 /Users/adrian/Downloads/house/scene.gltf --transform 
Files: /Users/adrian/Downloads/house/scene.gltf [20.34KB] > /Users/adrian/Projects/house-builder-prototype/scene-transformed.glb [144.96KB] (-613%)
Author: Fishboe (https://sketchfab.com/ministephen)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/house-be18892d167f40d9bb4d7dcae0eb0573
Title: House
*/

import { useGLTF } from "@react-three/drei";

export function ProjectTwo(props) {
  const { nodes, materials } = useGLTF("/project-second-transformed.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials.PaletteMaterial001}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5.geometry}
        material={materials.door1}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_6.geometry}
        material={materials.door2}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_7.geometry}
        material={materials.panesl}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_8.geometry}
        material={materials.slats}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_10.geometry}
        material={materials.PaletteMaterial002}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_11.geometry}
        material={materials.woodfloor}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_12.geometry}
        material={materials.foof}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.5}
      />
    </group>
  );
}

useGLTF.preload("/project-second-transformed.glb");
