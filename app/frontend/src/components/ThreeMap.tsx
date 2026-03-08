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

const CameraController = ({ selectedItem }: { selectedItem: any }) => {
   const { camera, controls } = (THREE as any); // Type helper

   useFrame((state) => {
      if (selectedItem) {
         const targetPos = new THREE.Vector3(
            selectedItem.position[0],
            selectedItem.position[1] + 1.5,
            selectedItem.position[2] + 2
         );
         state.camera.position.lerp(targetPos, 0.05);

         const focusPoint = new THREE.Vector3(...selectedItem.position);
         state.camera.lookAt(focusPoint);
      }
   });

   return null;
};

export const ThreeMap = () => {
   const { warungs, alerts, selectedItem, setSelectedItem } = useWiraStore();

   return (
      <div className="w-full h-full relative rounded-2xl overflow-hidden glass-panel border border-primary/20">
         <Canvas shadows dpr={[1, 2]}>
            <PerspectiveCamera makeDefault position={[0, 8, 12]} fov={45} />
            <OrbitControls
               enablePan={false}
               minPolarAngle={Math.PI / 6}
               maxPolarAngle={Math.PI / 2.2}
               makeDefault
            />

            <CameraController selectedItem={selectedItem} />

            <ambientLight intensity={0.4} />
            <pointLight position={[10, 10, 10]} intensity={1.5} color="#06f9f9" />
            <spotLight position={[-10, 20, 10]} angle={0.2} penumbra={1} intensity={2} color="#ff00ff" />

            <Stars radius={100} depth={50} count={7000} factor={4} saturation={0} fade speed={1} />

            <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
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

         {/* Location Indicator Overlay */}
         <div className="absolute top-4 left-4 z-10 flex flex-col gap-1">
            <h3 className="text-white font-black text-xs uppercase tracking-widest bg-primary/20 backdrop-blur-md px-3 py-1 rounded-full border border-primary/30">
               Malaysia Resilience Network
            </h3>
            {selectedItem && (
               <div className="flex items-center gap-2 animate-in slide-in-from-left-2 duration-300">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-[10px] text-primary font-bold uppercase brightness-125">
                     Focused: {selectedItem.type === 'WARUNG' ? selectedItem.name : 'Emergency Alert'}
                  </span>
               </div>
            )}
         </div>

         <div className="absolute bottom-4 left-4 pointer-events-none">
            <p className="text-primary text-[8px] font-black uppercase tracking-[0.3em] opacity-50 font-mono">
               Network Protocol v2.0
            </p>
         </div>
      </div>
   );
};
