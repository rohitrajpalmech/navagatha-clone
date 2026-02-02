"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";
import { MeshStandardMaterial } from "three";

export default function Viewer3D({
  selectedMaterial,
  modelName,
}: {
  selectedMaterial: string;
  modelName: string;
}) {
  return (
    <Canvas shadows camera={{ position: [3, 2, 4], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight intensity={1} position={[10, 10, 10]} castShadow />

      <FurnitureModel modelName={modelName} materialType={selectedMaterial} />

      <Environment preset="apartment" />
      <OrbitControls enablePan={false} />
    </Canvas>
  );
}

function FurnitureModel({
  materialType,
  modelName,
}: {
  materialType: string;
  modelName: string;
}) {
  const gltf = useGLTF(`/models/${modelName}.glb`);

  const materials: any = {
    wood: new MeshStandardMaterial({ color: "#a47551" }),
    black: new MeshStandardMaterial({ color: "#222" }),
    white: new MeshStandardMaterial({ color: "#eaeaea" }),
  };

  gltf.scene.traverse((child: any) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
      child.material = materials[materialType];
    }
  });

  return <primitive object={gltf.scene} scale={2} />;
}