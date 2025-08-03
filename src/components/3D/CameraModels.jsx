import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";

// Simple CCTV Camera 3D model using basic geometries
export function CCTVCamera({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 1,
  interactive = true,
  ...props
}) {
  const groupRef = useRef();
  const bodyRef = useRef();
  const lensRef = useRef();
  const ledRef = useRef();

  // Animation state
  useFrame((state) => {
    if (groupRef.current && interactive) {
      // Gentle floating animation
      groupRef.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime * 0.8) * 0.1;

      // Lens rotation following mouse
      if (lensRef.current) {
        const mouse = state.mouse;
        lensRef.current.rotation.y = mouse.x * 0.3;
        lensRef.current.rotation.x = -mouse.y * 0.2;
      }

      // LED blinking
      if (ledRef.current) {
        const intensity = Math.sin(state.clock.elapsedTime * 2) * 0.5 + 0.5;
        ledRef.current.material.emissiveIntensity = intensity;
      }
    }
  });

  // Materials
  const materials = useMemo(
    () => ({
      body: new THREE.MeshStandardMaterial({
        color: "#2a2a2a",
        metalness: 0.8,
        roughness: 0.2,
      }),
      lens: new THREE.MeshStandardMaterial({
        color: "#1a1a1a",
        metalness: 0.9,
        roughness: 0.1,
      }),
      led: new THREE.MeshStandardMaterial({
        color: "#ff0000",
        emissive: "#ff0000",
        emissiveIntensity: 0.5,
      }),
      mount: new THREE.MeshStandardMaterial({
        color: "#404040",
        metalness: 0.7,
        roughness: 0.3,
      }),
    }),
    []
  );

  return (
    <group
      ref={groupRef}
      position={position}
      rotation={rotation}
      scale={scale}
      {...props}
    >
      {/* Camera Body */}
      <mesh ref={bodyRef} material={materials.body}>
        <cylinderGeometry args={[0.8, 1, 2, 16]} />
      </mesh>

      {/* Camera Lens */}
      <mesh ref={lensRef} position={[0, 0, 1]} material={materials.lens}>
        <cylinderGeometry args={[0.6, 0.6, 0.2, 16]} />
      </mesh>

      {/* LED Indicator */}
      <mesh ref={ledRef} position={[0.5, 0.5, 0.8]} material={materials.led}>
        <sphereGeometry args={[0.05, 8, 8]} />
      </mesh>

      {/* Mount */}
      <mesh
        position={[0, -1.2, -0.5]}
        rotation={[Math.PI / 2, 0, 0]}
        material={materials.mount}
      >
        <cylinderGeometry args={[0.2, 0.2, 1, 8]} />
      </mesh>

      {/* Base */}
      <mesh position={[0, -1.7, -0.5]} material={materials.mount}>
        <cylinderGeometry args={[0.4, 0.4, 0.2, 8]} />
      </mesh>

      {interactive && (
        <Html position={[0, 2, 0]} center>
          <div
            className="bg-black/80 text-white px-3 py-1 rounded-lg text-sm pointer-events-none"
            style={{
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
            }}
          >
            Professional CCTV Camera
          </div>
        </Html>
      )}
    </group>
  );
}

// Security Room Environment
export function SecurityRoom({ ...props }) {
  const groupRef = useRef();

  return (
    <group ref={groupRef} {...props}>
      {/* Room walls */}
      <mesh position={[0, 0, -3]} receiveShadow>
        <planeGeometry args={[10, 6]} />
        <meshStandardMaterial color="#1a1a2e" />
      </mesh>

      {/* Monitoring screens */}
      {[...Array(6)].map((_, i) => (
        <group
          key={i}
          position={[((i % 3) - 1) * 2, 1 + Math.floor(i / 3) * -1.5, -2.9]}
        >
          {/* Screen frame */}
          <mesh>
            <planeGeometry args={[1.5, 1]} />
            <meshStandardMaterial color="#000000" />
          </mesh>

          {/* Screen content */}
          <mesh position={[0, 0, 0.01]}>
            <planeGeometry args={[1.3, 0.8]} />
            <meshStandardMaterial
              color="#00ff00"
              emissive="#004400"
              emissiveIntensity={0.2}
            />
          </mesh>
        </group>
      ))}

      {/* Control desk */}
      <mesh position={[0, -1.5, -1]} receiveShadow>
        <boxGeometry args={[6, 0.2, 2]} />
        <meshStandardMaterial color="#2a2a2a" />
      </mesh>

      {/* Chair */}
      <mesh position={[0, -0.8, 0]} castShadow>
        <cylinderGeometry args={[0.5, 0.5, 0.1, 16]} />
        <meshStandardMaterial color="#333333" />
      </mesh>
    </group>
  );
}

// Particle System for security coverage visualization
export function SecurityParticles({ count = 100, ...props }) {
  const meshRef = useRef();
  const particlesRef = useRef();

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 10;
      positions[i3 + 1] = (Math.random() - 0.5) * 10;
      positions[i3 + 2] = (Math.random() - 0.5) * 10;

      velocities[i3] = (Math.random() - 0.5) * 0.02;
      velocities[i3 + 1] = (Math.random() - 0.5) * 0.02;
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.02;
    }

    return { positions, velocities };
  }, [count]);

  useFrame(() => {
    if (particlesRef.current) {
      const positions = particlesRef.current.attributes.position.array;

      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        positions[i3] += particles.velocities[i3];
        positions[i3 + 1] += particles.velocities[i3 + 1];
        positions[i3 + 2] += particles.velocities[i3 + 2];

        // Wrap around boundaries
        if (Math.abs(positions[i3]) > 5) particles.velocities[i3] *= -1;
        if (Math.abs(positions[i3 + 1]) > 5) particles.velocities[i3 + 1] *= -1;
        if (Math.abs(positions[i3 + 2]) > 5) particles.velocities[i3 + 2] *= -1;
      }

      particlesRef.current.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points {...props}>
      <bufferGeometry ref={particlesRef}>
        <bufferAttribute
          attachObject={["attributes", "position"]}
          array={particles.positions}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#00D4FF"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}
