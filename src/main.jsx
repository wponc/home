import React, { useRef, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Environment, MeshTransmissionMaterial, Lightformer, Outlines, RandomizedLight, AccumulativeShadows } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Overlay />
    <App />
  </React.StrictMode>,
)

function App() {
  return (
    <>
    <Canvas camera={{
      position: [4, 1, -.5]
    }}
     shadows >
      <group position={[0, -0.5, 0]} >
        {/* <mesh castShadow position={[0, .25, 0]}>
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshPhysicalMaterial metalness={0.9} roughnes={0.2} color='#C0C0C0' iridescence={1} />
        </mesh> */}

        <mesh castShadow rotation={[0, Math.PI / 4, 0]} position={[1, 0.25, 0]}>
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          {/* <MeshTransmissionMaterial color='#e5e6df' thickness={1} roughness={0.3} chromaticAberration={1.1} /> */}
          <MeshTransmissionMaterial clearcoat={1} thickness={0.1} anisotropicBlur={0.1} chromaticAberration={.7} samples={8} resolution={512} />
        </mesh>

        <AccumulativeShadows temporal frames={100} color="gray" colorBlend={2} toneMapped={true} alphaTest={0.75} opacity={2} scale={12}>
          <RandomizedLight intensity={Math.PI} amount={8} radius={4} ambient={0.5} position={[5, 5, -10]} bias={0.001} />
        </AccumulativeShadows>
      </group>
      <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
      {/* <Environment 
          files='https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/hdris/fireplace/fireplace_1k.hdr'
          // background
          blur={0.9} 
        /> */}
      <Environment resolution={256}>
        <group rotation={[-Math.PI / 3, 0, 1]}>
          <Lightformer form="circle" intensity={4} rotation-x={Math.PI / 2} color='white' position={[0, 5, -9]} scale={2} />
          <Lightformer form="circle" intensity={2} rotation-y={Math.PI / 2} color='white' position={[-5, 1, -1]} scale={2} />
          <Lightformer form="circle" intensity={2} rotation-y={Math.PI / 2} color='red' position={[-5, -1, -1]} scale={2} />
          <Lightformer form="circle" intensity={2} rotation-y={-Math.PI / 2} color='blue' position={[10, 1, 0]} scale={8} />
        </group>
      </Environment>
      <color args={['#e5e6df']} attach='background' />
    </Canvas>
    </>
  )
}


function Overlay(){
  return(
    <nav>
      <ul>
        <div id='menu-button'>
          <li><a href="#"><span class="material-symbols-outlined" >select_all</span></a></li>
          <div className="dropdown-content">
            <a href="https://experience.will.limited">//experience</a>
            <a href="https://projects.will.limited">//projects</a>
            <a href="https://about.will.limited">//personal</a>
          </div>
        </div>
        <li><a href="mailto:willdotlimited@gmail.com">//contact</a></li>
      </ul>
    </nav>
  )
}
