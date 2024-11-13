import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import { X } from 'lucide-react';

interface CarViewer3DProps {
  onClose: () => void;
}

function CarModel() {
  return (
    <mesh>
      <boxGeometry args={[2, 1, 4]} />
      <meshStandardMaterial color="#1e40af" metalness={0.6} roughness={0.4} />
    </mesh>
  );
}

export default function CarViewer3D({ onClose }: CarViewer3DProps) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl w-full max-w-4xl h-[600px] relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full z-10"
        >
          <X className="w-6 h-6" />
        </button>
        
        <Canvas className="w-full h-full">
          <Suspense fallback={null}>
            <PerspectiveCamera makeDefault position={[5, 3, 5]} />
            <OrbitControls enablePan={false} />
            <Environment preset="city" />
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <CarModel />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}