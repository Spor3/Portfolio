
import { Box, Card, CardBody, Flex, FormControl, FormLabel, Heading, Input } from "@chakra-ui/react";
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
           width: '50%',
           height: '100vh',
           position:"absolute",
           bottom:"0px",
           right:"0px", 
           cursor:"grab",
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
        <Container id="contact">
            <>
            <Heading color="primary" fontSize="6xl" pt={20} zIndex={10}>Contats.</Heading >
            <Card maxW="sm">
                <CardBody>
                    <FormControl>
                        <FormLabel>Email address</FormLabel>
                        <Input type='email' />
                    </FormControl>
                </CardBody>
            </Card>
                <Laptop />
            </>
        </Container>
        </>)
}

export default Contact;
