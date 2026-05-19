import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera, PresentationControls, Environment, ContactShadows, Stars, Sparkles } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

function Building({ position, scale, color }: { position: [number, number, number], scale: [number, number, number], color: string }) {
  return (
    <mesh position={position}>
      <boxGeometry args={scale} />
      <meshStandardMaterial 
        color="#0a0a0a" 
        roughness={0} 
        metalness={1} 
        transparent 
        opacity={0.9}
      />
      <lineSegments>
        <edgesGeometry args={[new THREE.BoxGeometry(...scale)]} />
        <lineBasicMaterial color={color} transparent opacity={0.3} />
      </lineSegments>
    </mesh>
  );
}

function City() {
  const group = useRef<THREE.Group>(null);
  
  const buildings = useMemo(() => {
    const data = [];
    const colors = ["#00F0FF", "#FF00E5", "#FFB800", "#ffffff"];
    for (let i = 0; i < 60; i++) {
        const x = (Math.random() - 0.5) * 60;
        const z = (Math.random() - 0.5) * 60;
        const h = 2 + Math.random() * 18;
        data.push({
            position: [x, h/2, z] as [number, number, number],
            scale: [1.5, h, 1.5] as [number, number, number],
            color: colors[Math.floor(Math.random() * colors.length)]
        });
    }
    return data;
  }, []);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.05) * 0.1;
    }
  });

  return (
    <group ref={group}>
      {buildings.map((b, i) => (
        <Building key={i} position={b.position} scale={b.scale} color={b.color} />
      ))}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.05, 0]}>
        <planeGeometry args={[120, 120]} />
        <meshStandardMaterial color="#020202" metalness={0.8} roughness={0.2} />
      </mesh>
      <gridHelper args={[120, 60, "#333333", "#111111"]} position={[0, 0.1, 0]} />
    </group>
  );
}

function GlowingRoutes() {
    const lines = useMemo(() => {
        const lts = [];
        const colors = ["#00F0FF", "#FF00E5"];
        for (let i = 0; i < 15; i++) {
            const start = [(Math.random() - 0.5) * 50, 0.15, (Math.random() - 0.5) * 50] as [number, number, number];
            const end = [(Math.random() - 0.5) * 50, 0.15, (Math.random() - 0.5) * 50] as [number, number, number];
            lts.push({ start, end, color: colors[i % 2] });
        }
        return lts;
    }, []);

    return (
        <group>
            {lines.map((l, i) => (
                <mesh key={i} position={l.start}>
                    <sphereGeometry args={[0.15, 16, 16]} />
                    <meshBasicMaterial color={l.color} />
                </mesh>
            ))}
        </group>
    );
}

export default function ThreeScene() {
  return (
    <div className="fixed inset-0 -z-10 bg-black">
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[40, 25, 40]} fov={45} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <Sparkles count={200} scale={50} size={2} speed={0.5} opacity={0.2} color="#00F0FF" />
        
        <ambientLight intensity={0.2} />
        <pointLight position={[20, 20, 20]} intensity={2} color="#00F0FF" />
        <pointLight position={[-20, 15, -10]} intensity={2} color="#FF00E5" />
        <spotLight position={[0, 40, 0]} angle={0.5} penumbra={1} intensity={1} castShadow />

        <PresentationControls
            global
            snap
            rotation={[0, 0, 0]}
            polar={[-Math.PI / 10, Math.PI / 10]}
            azimuth={[-Math.PI / 10, Math.PI / 10]}
        >
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                <City />
                <GlowingRoutes />
            </Float>
            <ContactShadows position={[0, -0.01, 0]} opacity={0.6} scale={100} blur={3} far={10} />
        </PresentationControls>

        <Environment preset="night" />
      </Canvas>
    </div>
  );
}
