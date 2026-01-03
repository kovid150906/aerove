import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, Center } from '@react-three/drei'
import { Suspense, useRef, useEffect, useState } from 'react'
import * as THREE from 'three'

/* =========================
   GROUND SHADOW
========================= */
function GroundShadow({ isMobile }) {
  const ref = useRef()

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (!ref.current) return
    ref.current.scale.setScalar(1 + Math.sin(t) * 0.02)
    ref.current.material.opacity = 0.25 + Math.sin(t) * 0.05
  })

  return (
    <mesh
      ref={ref}
      rotation={[-Math.PI / 2, 0, 0]}
      position={[isMobile ? 0 : 3.5, -1.0, 0]}
      renderOrder={-1}
    >
      <circleGeometry args={[0.9, 32]} />
      <meshBasicMaterial transparent opacity={0.25} color="black" depthWrite={false} />
    </mesh>
  )
}

/* =========================
   DRONE MODEL
========================= */
function DroneModel({ pointer, isMobile }) {
  const ref = useRef()
  const { scene } = useGLTF('/models/drone.glb')

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh && child.material) {
        child.material.metalness = 0.6
        child.material.roughness = 0.3
      }
    })
  }, [scene])

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (!ref.current) return

    // Hover
    ref.current.position.y = Math.sin(t * 1.2) * 0.1

    // Idle rotation
    ref.current.rotation.y += 0.002

    // Pointer influence
    ref.current.rotation.x += (pointer.current.y * 0.35 - ref.current.rotation.x) * 0.08
    ref.current.rotation.z += (pointer.current.x * 0.35 - ref.current.rotation.z) * 0.08
  })

  return (
    <Center position={[isMobile ? 0 : 3.5, 0, 0]}>
      <primitive
        ref={ref}
        object={scene}
        scale={isMobile ? 0.48 : 0.72}
        rotation={[0, Math.PI, 0]}
      />
    </Center>
  )
}

/* =========================
   CAMERA
========================= */
function CameraRig({ pointer, isMobile }) {
  useFrame(({ camera }) => {
    camera.position.x += (pointer.current.x * 0.4 - camera.position.x) * 0.05
    camera.position.y += ((isMobile ? 1.8 : 1.4) + pointer.current.y * 0.3 - camera.position.y) * 0.05
    camera.position.z = isMobile ? 7 : 5.6
    camera.lookAt(isMobile ? 0 : 1.5, 0, 0)
  })

  return null
}

/* =========================
   MAIN SCENE
========================= */
export default function DroneHeroScene() {
  const pointer = useRef({ x: 0, y: 0 })
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return (
    <Canvas
      style={{
        width: '100%',
        height: '100%',
        touchAction: 'none',
        pointerEvents: 'auto'
      }}
      dpr={isMobile ? 1 : [1, 1.5]}
      camera={{ position: [0, 1.4, 5.6], fov: 40 }}
      gl={{
        toneMapping: THREE.ACESFilmicToneMapping,
        outputColorSpace: THREE.SRGBColorSpace
      }}

      /* 🔥 THIS FIXES TOUCH */
      onPointerDown={(e) => {
        e.target.setPointerCapture(e.pointerId)
      }}
      onPointerMove={(e) => {
        pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1
        pointer.current.y = -(e.clientY / window.innerHeight) * 2 + 1
      }}
      onPointerUp={(e) => {
        e.target.releasePointerCapture(e.pointerId)
        pointer.current.x = 0
        pointer.current.y = 0
      }}
    >
      <Suspense fallback={null}>
        {/* Lighting */}
        <ambientLight intensity={0.45} />

        <directionalLight
          position={[6, 8, 4]}
          intensity={1.6}
          color="#e6f2ff"
        />

        <directionalLight
          position={[-6, 4, -4]}
          intensity={1}
          color="#7fcfff"
        />

        <pointLight
          position={[0, -1.5, 3]}
          intensity={0.35}
          color="#bcdcff"
        />

        <GroundShadow isMobile={isMobile} />
        <DroneModel pointer={pointer} isMobile={isMobile} />
        <CameraRig pointer={pointer} isMobile={isMobile} />
      </Suspense>
    </Canvas>
  )
}
