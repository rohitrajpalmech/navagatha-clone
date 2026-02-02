"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

// load viewer in client only
const Viewer3D = dynamic(() => import("./viewer"), { ssr: false });

export default function ConfiguratorPage() {
  const [material, setMaterial] = useState("wood");
  const [model, setModel] = useState("chair");

  return (
    <div className="min-h-screen bg-white dark:bg-black px-8 py-10">
      <h1 className="text-3xl font-bold text-black dark:text-white text-center">
        3D Furniture Configurator
      </h1>

      <div className="w-full h-[600px] mt-10">
        <Viewer3D selectedMaterial={material} modelName={model} />
      </div>

      {/* MODEL SELECTOR */}
      <h2 className="text-xl text-center text-black dark:text-white mt-12 mb-4">
        Choose Furniture Model
      </h2>

      <div className="flex justify-center gap-4 flex-wrap">
        {["chair", "table", "sofa", "bed", "shelf", "dining"].map((m) => (
          <button
            key={m}
            onClick={() => setModel(m)}
            className={`px-6 py-3 rounded-lg border ${
              model === m
                ? "bg-black text-white"
                : "bg-white dark:bg-black text-black dark:text-white"
            }`}
          >
            {m.charAt(0).toUpperCase() + m.slice(1)}
          </button>
        ))}
      </div>

      {/* MATERIAL SELECTOR */}
      <h2 className="text-xl text-center text-black dark:text-white mt-12 mb-4">
        Choose Material
      </h2>

      <div className="flex justify-center gap-6 mt-4 flex-wrap">
        {["wood", "black", "white"].map((mat) => (
          <button
            key={mat}
            onClick={() => setMaterial(mat)}
            className={`px-6 py-3 rounded-lg border ${
              material === mat
                ? "bg-black text-white"
                : "bg-white dark:bg-black text-black dark:text-white"
            }`}
          >
            {mat.charAt(0).toUpperCase() + mat.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}