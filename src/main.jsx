import React, { useRef, useState, useLayoutEffect } from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Environment, MeshTransmissionMaterial, Stage, Backdrop } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Overlay />
    <App />
  </React.StrictMode>,
)

function App() {
  // const [dpr, setDpr] = useState(2)
  const cameraDist = 2
  return (
    <>
      <Canvas
        camera={{
          position: [0, cameraDist, cameraDist]
        }}
        shadows
      >
        {/* <EffectComposer disableNormalPass>
          <Bloom mipmapBlur luminanceThreshold={1} intensity={2} />
        </EffectComposer> */}
        <Environment 
          files='https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/hdris/fireplace/fireplace_1k.hdr'
          background
          blur={0.9} 
        />
        <OrbitControls />
        {/* <color args={['#e5e6df']} attach='background' /> */}
        <ambientLight intensity={Math.PI / 2} />
        {/* <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} /> */}
        {/* <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} /> */}
        <directionalLight position={[0, 2, 4]} />
        <Stage shadows="accumulative" adjustCamera={cameraDist} >
          <mesh castShadow position-x={-.75}>
            <boxGeometry />
            <meshPhysicalMaterial metalness={0.9} roughnes={0.2} color='#C0C0C0' iridescence={1} />
          </mesh> 
          <mesh castShadow position-x={.75}>
            <boxGeometry />
            <MeshTransmissionMaterial color='#e5e6df' thickness={1} roughness={0.3} chromaticAberration={1.1} />
          </mesh> 
        </Stage>
  
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
