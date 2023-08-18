
import { Heading } from "@chakra-ui/react";
import Container from "../Components/Container";
import { Suspense, useEffect } from "react";
import { Loader } from "../Components/MyModel";
import { OrbitControls, Preload } from "@react-three/drei";
import { LaptopModel } from "../Laptop";
import { Canvas } from "@react-three/fiber";

const Laptop = () => {
    return(
        <Canvas
        camera={{ position: [2, 0, 12.25], fov: 15 }}
        shadows
        /* frameloop='demand' */
        gl={{preserveDrawingBuffer: true}}
        style={{
           /* backgroundColor: '#111a21', */
           width: '100%',
           height: '100vh',
           position:"absolute",
           bottom:"0px",
           left:"0px",
           cursor:"grab"
           /* marginTop:"10vh" */
        }}
     >
         <ambientLight intensity={1.25} />
         <ambientLight intensity={0.1} />
         <directionalLight intensity={0.4} />
        <Suspense fallback={<Loader />}>
            <OrbitControls enableZoom={false}  />
            <LaptopModel position={[0.025, -0.9, -0.1]} /> 
        </Suspense>
        <Preload all />
     </Canvas>
    )
}

const Contact = () => {


    return(
        <>
        <canvas style={{position:"absolute", bottom:"0px", right:"0px", width:"100vw", height:"100vh", zIndex:0}} id="matrix"></canvas>
        <Container id="contact">
            <>
            <Heading color="primary" fontSize="6xl" pt={20} zIndex={10}>Contats.</Heading >
            <Laptop />
            </>
        </Container>
        </>)
}

export default Contact;
