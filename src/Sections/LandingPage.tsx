import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import {Container} from "../hoc/Index";
import MyModel from "../Components/MyModel";
import { useMQuery } from "../ContextMediaQuery";
import {RiArrowDownDoubleLine} from "react-icons/ri";
import { motion } from "framer-motion";
const ArrowDown = () => {

    const {...mediaquery} = useMQuery();
    return (
    <Flex justifyContent="center" alignItems="center" position="absolute" width="50%" bottom="10px" left="25%" right="25%" zIndex={100}>
        <a href="#overview">
        <motion.div
        animate={{
            translateY:["-5px", "+5px", "-5px"],
            opacity:[1,0.3,1],
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            repeat: Infinity,
          }}>
                    <RiArrowDownDoubleLine size={mediaquery.isLargerThan1200 ? "100px" : "80px"} color="#805AD5" />
        </motion.div>
        </a>
    </Flex>);
}
const LandingPage = () => {
    const {isLargerThan500} = useMQuery();

    return(   
        <>
    <Box position="relative" className='min-h-100'>
        <Heading color="primary" fontSize="6xl" pt={20}>Hi, I'm <Text display="inline" color="violet">Simone</Text> </Heading > 
        <Text mt={3} color="secondary" fontSize={isLargerThan500 ? "4xl" : "2xl"}>I am a fullstack developer, <br /> with a passion for computer science</Text>
        <ArrowDown />
    </Box>
            <MyModel />  
     </>
 );
}



export default Container(LandingPage);