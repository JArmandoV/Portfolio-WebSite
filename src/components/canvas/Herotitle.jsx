import { Suspense, useEffect, useState } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload, useGLTF, PointMaterial, Point } from "@react-three/drei"
import CanvasLoader from '../Loader'


const Text = ({isMobile}) => {
  const text = useGLTF('./desktop_pc/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={0.15}
        groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
      position={[10, 2, 10]} 
      angle={0.80}
      penumbra={1}
      intensity={1}
      
   
      />
      <primitive
        object={text.scene}
        scale={isMobile ? 0.25 : 0.75}
        position={ isMobile ? [-.3, 0, 0] : [-0.7,0,0]}
      />
    </mesh>
  )
}

const TextCanvas = () => {
    const [isMobile, setisMobile] = useState(false)
    
    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 1015px)')

        setisMobile(mediaQuery.matches)
        console.log(isMobile)
        const handleMediaQueryChange = (event) => {
            setisMobile(event.matches)
        }
        mediaQuery.addEventListener('change',
        handleMediaQueryChange)

        return () => {
            mediaQuery.removeEventListener('change',
            handleMediaQueryChange)
        }
        
  },[])
 

  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov:45,
        near: 0.1,
        far: 200,
        position: [0, 3, 4]
      }}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI/2}
          minPolarAngle={Math.PI/2}
        />
        <Text isMobile={isMobile}/>
      </Suspense>
    </Canvas>
  )
}
 
export default TextCanvas