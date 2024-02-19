import React, { useRef, useState } from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Environment, MeshTransmissionMaterial, PerformanceMonitor } from '@react-three/drei'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Overlay />
    <App />
  </React.StrictMode>,
)

function App() {
  const [dpr, setDpr] = useState(2)
  return (
    <>
      <Canvas>
        <PerformanceMonitor onIncline={() => setDpr(2)} onDecline={() => setDpr(1)} />
        <Environment 
          files='https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/hdris/fireplace/fireplace_1k.hdr'
          blur={0.9} 
        />
        <color args={['#e5e6df']} attach='background' />
        <ambientLight intensity={Math.PI / 2} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        <Group />
      </Canvas>
    </>
  )
}

function Group() {
  useFrame(() => {
    group.current.rotation.y += .003 
    group.current.rotation.x += .003 
  })
  const group = useRef()
  return (
    <>
    <group ref={group}>
      <mesh position={[-1.01, 0, 0]}>
        <boxGeometry />
        <MeshTransmissionMaterial color='#ffffff' thickness={1} roughness={0.3} chromaticAberration={1.1} />
      </mesh>
      <mesh position={[1.01, 0, 0]}>
        <boxGeometry />
        <MeshTransmissionMaterial color='#ffffff' thickness={1} roughness={0.3} chromaticAberration={1.1} />
      </mesh>
      <mesh position={[0, 1.01, 0]}>
        <boxGeometry />
        <MeshTransmissionMaterial color='#ffffff' thickness={1} roughness={0.3} chromaticAberration={1.1} />
      </mesh>
      <mesh position={[0, -1.01, 0]}>
        <boxGeometry />
        <MeshTransmissionMaterial color='#ffffff' thickness={1} roughness={0.3} chromaticAberration={1.1} />
      </mesh>
      <mesh position={[0, 0, 0]}>
        <boxGeometry />
        <meshPhysicalMaterial metalness={0.9} roughnes={0.5} color='#120329' iridescence={1} />
      </mesh>
     </group>
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
