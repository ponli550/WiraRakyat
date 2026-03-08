"use client";

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Stars, Float } from '@react-three/drei';
import * as THREE from 'three';
import { useWiraStore } from '@/store/useWiraStore';

const SME_MARKERS = [
   { position: [-1.5, 0.5, 0] as [number, number, number], name: "Warung Nasi Lemak Ipan" },
   { position: [0.5, -0.5, 0.2] as [number, number, number], name: "Kelantan SME" },
   { position: [2, 0.2, -0.5] as [number, number, number], name: "Sarawak Hub" },
];

const ALERT_MARKERS = [
   { position: [-0.5, 0.2, 0.1] as [number, number, number], severity: "high" },
];

const MalaysiaMap = () => {
   // A simple plane to represent the base map for now
   // In a real scenario, this would be a GeoJSON-based extruded mesh
   return (
      <mesh rotation={[-Math.PI / 2.5, 0, 0]}>
         <planeGeometry args={[10, 6]} />
         <meshStandardMaterial
            color="#0f2323"
            emissive="#06f9f9"
            emissiveIntensity={0.1}
            transparent
            opacity={0.8}
         />
      </mesh>
   );
};

const Marker = ({
   position,
   color,
   pulse = false,
   onClick
}: {
   position: [number, number, number],
   color: string,
   pulse?: boolean,
   onClick?: () => void
}) => {
   const meshRef = useRef<THREE.Mesh>(null);
   const ringRef = useRef<THREE.Mesh>(null);
   const [hovered, setHovered] = React.useState(false);

   useFrame((state) => {
      if (meshRef.current) {
         meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.1;
         if (hovered) {
            meshRef.current.scale.lerp(new THREE.Vector3(1.2, 1.2, 1.2), 0.1);
         } else {
            meshRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
         }
      }
      if (ringRef.current && pulse) {
         const s = (Math.sin(state.clock.elapsedTime * 4) + 1.2) * 1.5;
         ringRef.current.scale.set(s, s, s);
         (ringRef.current.material as THREE.MeshBasicMaterial).opacity = 1 - (s / 3);
      }
   });

   return (
      <group
         position={position}
         onClick={(e) => {
            e.stopPropagation();
            onClick?.();
         }}
         onPointerOver={() => {
            setHovered(true);
            document.body.style.cursor = 'pointer';
         }}
         onPointerOut={() => {
            setHovered(false);
            document.body.style.cursor = 'auto';
         }}
      >
         <mesh ref={meshRef}>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshStandardMaterial
               color={hovered ? "#ffffff" : color}
               emissive={color}
               emissiveIntensity={hovered ? 2 : 1}
            />
         </mesh>
         {pulse && (
            <mesh ref={ringRef} rotation={[-Math.PI / 2, 0, 0]}>
               <ringGeometry args={[0.1, 0.2, 32]} />
               <meshBasicMaterial color={color} transparent opacity={0.5} />
            </mesh>
         )}
      </group>
   );
};

export const ThreeMap = () => {
   const { warungs, alerts, setSelectedItem } = useWiraStore();

   return (
      <div className="w-full h-[600px] relative rounded-2xl overflow-hidden glass-panel border border-primary/20">
         <Canvas shadows>
            <PerspectiveCamera makeDefault position={[0, 5, 8]} />
            <OrbitControls enableZoom={false} enablePan={false} minPolarAngle={Math.PI / 4} maxPolarAngle={Math.PI / 2.5} />

            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} color="#06f9f9" />
            <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#ff00ff" />

            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
               <MalaysiaMap />

               {warungs.map((warung) => (
                  <Marker
                     key={warung.id}
                     position={warung.position}
                     color="#06f9f9"
                     onClick={() => setSelectedItem(warung)}
                  />
               ))}

               {alerts.map((alert) => (
                  <Marker
                     key={alert.id}
                     position={alert.position}
                     color="#ff3b30"
                     pulse
                     onClick={() => setSelectedItem(alert)}
                  />
               ))}
            </Float>
         </Canvas>
         <div className="absolute bottom-4 left-4 pointer-events-none">
            <p className="text-primary text-xs font-bold uppercase tracking-widest bg-background/50 px-2 py-1 rounded">
               Real-time Malaysia Resilience Map
            </p>
         </div>
      </div>
   );
};
