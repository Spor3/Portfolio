
import { Avatar, Box, Card, CardBody, CardHeader, Flex, Heading } from "@chakra-ui/react";
import { Suspense } from "react";
import { Loader } from "../Components/MyModel";
import { OrbitControls, Preload } from "@react-three/drei";
import { LaptopModel } from "../Laptop";
import { Canvas } from "@react-three/fiber";
import {BiLogoLinkedin} from "react-icons/bi";
import { motion } from "framer-motion";
import { textVariantsX, textVariantsY } from "../Constant/Const";
import {Container} from "../hoc/Index";
import Form from "../Components/Form";
import { useMQuery } from "../ContextMediaQuery";

const Laptop = () => {
    const {isLargerThan500,isLargerThan630} = useMQuery();

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
        <Suspense fallback={<Loader size="big" />}>
            <OrbitControls enableZoom={false}  />
            <LaptopModel position={[0.025, -0.5, -0.1]}/> 
        </Suspense>
        <Preload all />
     </Canvas>
    )
}

const Contact = () => {

    const {isLargerThan500, isLargerThan630, isLargerThan680, isLargerThan860, isLargerThan1200} = useMQuery();

    return(
            <Flex className="min-h-100" flexDirection="column" id="contact">
            <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true, /* amount: 0.8 */ }} variants={textVariantsY}>
            <Heading color="primary" fontSize="6xl" pt={20}>Contacts.</Heading >
            </motion.div>
            <Box my="auto"  mx={isLargerThan630 ? 0 : "auto"} >
            <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true, /* amount: 0.8 */ }} variants={textVariantsX}>
            <Card maxW={isLargerThan1200 ? "xl" : isLargerThan860 ? "md" : "xs"} mt={10} mb={5} bg="#1a2832" boxShadow="xl" borderRadius="10px" p={isLargerThan630 ? 3 : 6}> 
                <CardHeader><Heading color="primary">Send <span style={{color:"#9F7AEA"}}>message</span></Heading></CardHeader>
                <CardBody>
                 <Form />
                </CardBody>
            </Card>
            <a href="https://www.linkedin.com/in/simone-sporeni/" target="_blank" rel="noreferrer" ><Avatar bg="#0A66C2" ms={10} mb={10} icon={<BiLogoLinkedin />}/></a>
            </motion.div>
            </Box>
                <Laptop />
            </Flex>)
}

export default Container(Contact);
