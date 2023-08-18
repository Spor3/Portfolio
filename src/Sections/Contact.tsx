
import { Avatar, Box, Button, ButtonGroup, Card, CardBody, CardHeader, Flex, FormControl, FormLabel, HStack, Heading, Input, Textarea, VStack, useMediaQuery } from "@chakra-ui/react";
import Container from "../Components/Container";
import { Suspense, useEffect } from "react";
import { Loader } from "../Components/MyModel";
import { OrbitControls, Preload } from "@react-three/drei";
import { LaptopModel } from "../Laptop";
import { Canvas } from "@react-three/fiber";
import {SiMinutemailer} from "react-icons/si";
import {BiLogoLinkedin} from "react-icons/bi";

const Laptop = () => {
    const [isLargerThan630] = useMediaQuery('(min-width: 630px)');
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
           display: !isLargerThan630 ? "none" : "block"
        }}
     >
         <ambientLight intensity={1.25} />
         <ambientLight intensity={0.1} />
         <directionalLight intensity={0.4} />
        <Suspense fallback={<Loader />}>
            <OrbitControls enableZoom={false}  />
            <LaptopModel position={[0.025, -0.5, -0.1]}/> 
        </Suspense>
        <Preload all />
     </Canvas>
    )
}

const Contact = () => {

    const [isLargerThan1200] = useMediaQuery('(min-width: 1200px)');
    const [isLargerThan860] = useMediaQuery('(min-width: 860px)');
    const [isLargerThan630] = useMediaQuery('(min-width: 630px)');

    return(
        <>
        <Container id="contact">
            <Flex className="min-h-100" flexDirection="column">
            <Heading color="primary" fontSize="6xl" pt={20}>Contats.</Heading >
            <Box my="auto"  mx={isLargerThan630 ? 0 : "auto"} >
            <Card maxW={isLargerThan1200 ? "xl" : isLargerThan860 ? "md" : "xs"} mt={10} mb={5} bg="#1a2832" boxShadow="xl" borderRadius="10px" p={isLargerThan630 ? 3 : 6}> 
                <CardHeader><Heading color="primary">Send <span style={{color:"#9F7AEA"}}>message</span></Heading></CardHeader>
                <CardBody>
                    <form >
                    <VStack spacing={5}>
                    <FormControl>
                        <FormLabel color="secondary">From</FormLabel>
                        <Input _focusVisible={{borderColor:"violet", boxShadow:"0 0 0 1px #9F7AEA"}} type='text' bg="primary" />
                    </FormControl>
                    <FormControl>
                        <FormLabel color="secondary">Subject</FormLabel>
                        <Input _focusVisible={{borderColor:"violet", boxShadow:"0 0 0 1px #9F7AEA"}} type='text' bg="primary"/>
                    </FormControl>
                    <Textarea _focusVisible={{borderColor:"violet", boxShadow:"0 0 0 1px #9F7AEA"}} resize="none" height="150px" bg="primary" placeholder="Write message..." />
                    <ButtonGroup>
                    <Button bg="violet" color="primary" _hover={{opacity:"0.8"}} type="button" rightIcon={<SiMinutemailer />}>Send</Button>
                    </ButtonGroup>
                   </VStack>
                   </form>
                </CardBody>
            </Card>
            <a href="https://www.linkedin.com/in/simone-sporeni/" target="_blank" rel="noreferrer" ><Avatar bg="#0A66C2" ms={10} mb={10} icon={<BiLogoLinkedin />}/></a>
            </Box>
                <Laptop />
            </Flex>
        </Container>
        </>)
}

export default Contact;
