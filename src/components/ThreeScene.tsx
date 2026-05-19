import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera, MeshDistortMaterial, MeshWobbleMaterial, GradientTexture, PresentationControls, Environment, ContactShadows } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

function Building({ position, scale }: { position: [number, number, number], scale: [number, number, number] }) {
  return (
    <mesh position={position}>
      <boxGeometry args={scale} />
      <meshStandardMaterial 
        color="#1a1a1a" 
        roughness={0.1} 
        metalness={0.8} 
        transparent 
        opacity={0.8}
      />
      <lineSegments>
        <edgesGeometry args={[new THREE.BoxGeometry(...scale)]} />
        <lineBasicMaterial color="#0055FF" transparent opacity={0.2} />
      </lineSegments>
    </mesh>
  );
}

function City() {
  const group = useRef<THREE.Group>(null);
  
  // Create a grid of buildings
  const buildings = useMemo(() => {
    const data = [];
    for (let i = 0; i < 40; i++) {
        const x = (Math.random() - 0.5) * 50;
        const z = (Math.random() - 0.5) * 50;
        const h = 5 + Math.random() * 15;
        data.push({
            position: [x, h/2, z] as [number, number, number],
            scale: [2, h, 2] as [number, number, number]
        });
    }
    return data;
  }, []);

  useFrame((state) => {
    if (group.current) {
      group.current.position.z = Math.sin(state.clock.getElapsedTime() * 0.1) * 2;
    }
  });

  return (
    <group ref={group}>
      {buildings.map((b, i) => (
        <Building key={i} position={b.position} scale={b.scale} />
      ))}
      {/* City lights/routes */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.1, 0]}>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="#000818" />
      </mesh>
      <gridHelper args={[100, 50, "#0055FF", "#000B26"]} position={[0, 0.15, 0]} />
    </group>
  );
}

function LogisticsRoutes() {
    const points = useMemo(() => {
        const pts = [];
        for (let i = 0; i < 5; i++) {
            const start = new THREE.Vector3((Math.random() - 0.5) * 40, 0.2, (Math.random() - 0.5) * 40);
            const end = new THREE.Vector3((Math.random() - 0.5) * 40, 0.2, (Math.random() - 0.5) * 40);
            pts.push({ start, end });
        }
        return pts;
    }, []);

    return (
        <group>
            {points.map((p, i) => (
                <mesh key={i} position={[p.start.x, 0.2, p.start.z]}>
                    <sphereGeometry args={[0.2, 8, 8]} />
                    <meshBasicMaterial color="#0055FF" />
                </mesh>
            ))}
        </group>
    );
}

export default function ThreeScene() {
  return (
    <div className="fixed inset-0 -z-10 bg-navy">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[30, 20, 30]} fov={50} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#0055FF" />
        <spotLight position={[-10, 20, 10]} angle={0.15} penumbra={1} intensity={2} castShadow color="#ffffff" />
        
        <PresentationControls
            global
            snap
            rotation={[0, 0.3, 0]}
            polar={[-Math.PI / 4, Math.PI / 4]}
            azimuth={[-Math.PI / 4, Math.PI / 4]}
        >
            <City />
            <LogisticsRoutes />
            <ContactShadows position={[0, -0.01, 0]} opacity={0.5} scale={100} blur={2.5} far={4} />
        </PresentationControls>

        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
