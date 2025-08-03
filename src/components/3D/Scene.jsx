import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  ContactShadows,
  PerspectiveCamera,
} from "@react-three/drei";
import { CCTVCamera, SecurityParticles } from "./CameraModels";
import { useSceneStore } from "../../store";

// Loading fallback component
function LoadingFallback() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="loading-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-tech-blue"></div>
        <p className="mt-4 text-white">Loading 3D Scene...</p>
      </div>
    </div>
  );
}

// Hero 3D Scene
export function HeroScene({ className = "h-96" }) {
  const { setInteracting } = useSceneStore();

  return (
    <div className={`canvas-container ${className}`}>
      <Canvas
        camera={{ position: [5, 2, 5], fov: 60 }}
        onPointerDown={() => setInteracting(true)}
        onPointerUp={() => setInteracting(false)}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          {/* Lighting */}
          <ambientLight intensity={0.4} />
          <directionalLight
            position={[10, 10, 5]}
            intensity={1}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
          />
          <pointLight
            position={[-10, 0, -20]}
            intensity={0.5}
            color="#00D4FF"
          />
          <pointLight position={[0, -10, 0]} intensity={0.3} color="#3B82F6" />

          {/* Main CCTV Camera */}
          <CCTVCamera position={[0, 0, 0]} scale={1.5} interactive={true} />

          {/* Particle effects */}
          <SecurityParticles count={50} />

          {/* Environment */}
          <Environment preset="night" />

          {/* Ground shadows */}
          <ContactShadows
            position={[0, -2, 0]}
            opacity={0.3}
            scale={10}
            blur={1.5}
          />

          {/* Controls */}
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            enableRotate={true}
            autoRotate={true}
            autoRotateSpeed={1}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI - Math.PI / 3}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

// Product showcase scene
export function ProductScene({ cameraType = "dome", className = "h-80" }) {
  return (
    <div className={`canvas-container ${className}`}>
      <Canvas camera={{ position: [3, 1, 3], fov: 50 }}>
        <Suspense fallback={null}>
          {/* Lighting setup */}
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={0.8} />
          <pointLight position={[-5, 0, 0]} intensity={0.4} color="#00D4FF" />

          {/* Camera model based on type */}
          <CCTVCamera position={[0, 0, 0]} scale={1.2} interactive={false} />

          {/* Environment */}
          <Environment preset="studio" />

          {/* Controls */}
          <OrbitControls
            enablePan={false}
            enableZoom={true}
            enableRotate={true}
            minDistance={2}
            maxDistance={8}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

// Interactive demo scene
export function DemoScene({ className = "h-96" }) {
  return (
    <div className={`canvas-container ${className}`}>
      <Canvas camera={{ position: [8, 4, 8], fov: 60 }}>
        <Suspense fallback={<LoadingFallback />}>
          {/* Enhanced lighting */}
          <ambientLight intensity={0.3} />
          <directionalLight position={[10, 10, 5]} intensity={1.2} castShadow />
          <pointLight position={[0, 5, 0]} intensity={0.5} color="#00D4FF" />
          <spotLight
            position={[5, 5, 5]}
            angle={0.3}
            penumbra={1}
            intensity={0.5}
            color="#F97316"
          />

          {/* Multiple cameras showing coverage */}
          <CCTVCamera
            position={[-3, 1, -2]}
            scale={0.8}
            rotation={[0, Math.PI / 4, 0]}
          />
          <CCTVCamera
            position={[3, 1, -2]}
            scale={0.8}
            rotation={[0, -Math.PI / 4, 0]}
          />
          <CCTVCamera
            position={[0, 2, 2]}
            scale={0.8}
            rotation={[0, Math.PI, 0]}
          />

          {/* Coverage visualization particles */}
          <SecurityParticles count={100} />

          {/* Environment */}
          <Environment preset="warehouse" />

          {/* Ground plane */}
          <mesh
            position={[0, -1, 0]}
            receiveShadow
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <planeGeometry args={[20, 20]} />
            <meshStandardMaterial color="#1a1a2e" transparent opacity={0.8} />
          </mesh>

          {/* Controls */}
          <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            minDistance={5}
            maxDistance={20}
            maxPolarAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
