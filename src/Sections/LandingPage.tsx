import { Box, Heading, Text, useMediaQuery } from "@chakra-ui/react";
import {Container} from "../hoc/Index";
import MyModel from "../Components/MyModel";

const LandingPage = () => {
    const [isLargerThan500] = useMediaQuery('(min-width: 500px)');

    return(   
    <Box className='min-h-100'>
        <Heading color="primary" fontSize="6xl" pt={20}>Hi, I'm <Text display="inline" color="violet">Simone</Text> </Heading > 
        <Text mt={3} color="secondary" fontSize={isLargerThan500 ? "4xl" : "2xl"}>I am a fullstack developer, <br /> with a passion for computer science</Text>
        <MyModel />  
    </Box>
 );
}

export default Container(LandingPage);