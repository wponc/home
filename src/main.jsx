import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Cloud, MeshTransmissionMaterial, Text, Center } from '@react-three/drei'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Overlay />
    <App />
  </React.StrictMode>,
)

function App() {
  return (
    <>
    <Canvas>
      <color attach="background" args={["black"]} />
      <OrbitControls />
      <ambientLight />
      <Text fontSize={.3} position={[0, 0, 1.9]}>
        welcome
      </Text>
        <mesh  position={[0, 0, 2]}>  
          <planeGeometry args={[5, 3]}/>
          <MeshTransmissionMaterial chromaticAberration={.4} thickness={2} color={'white'}/>
        </mesh>
      {/* </Bounds>    */}
      <Cloud segments={5} speed={0.1} color={'darkorange'} bounds={[6, 3, 1]}/>
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

