import { Suspense, useEffect, useState } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"
import CanvasLoader from '../Loader'


const Letters = () => {
  const computer = useGLTF('./room/test.gltf')
  return (
    <mesh>
    <hemisphereLight intensity={0.15}
      groundColor="black" />
    <pointLight intensity={1} />
    <spotLight
    position={[-20, 50, 10]} 
    angle={0.12}
    penumbra={1}
    intensity={1}
    castShadow
    shadow-mapSize={1024}
    />
    <primitive
      object={computer.scene}
      scale={0.75}
      position={ [0, 0, 0]}
      rotation={[0, 0, 0]}
    />
  </mesh>
  )
}

const LettersCanvas = () => {
 

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 50 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls
          enableZoom={true}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Letters />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default LettersCanvas