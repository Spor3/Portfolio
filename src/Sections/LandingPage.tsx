import { Box, Flex, Heading, Text, useMediaQuery } from "@chakra-ui/react";
import Container from "../Components/Container";
import MyModel from "../Components/MyModel";

const LandingSection = () => {
    const [isLargerThan500] = useMediaQuery('(min-width: 500px)')
    
    return(    
        <>
           <Heading color="primary" fontSize="6xl" pt={10}>Hi, I'm <Text display="inline" color="violet">Simone</Text> </Heading > 
           <Text mt={3} color="secondary" fontSize={isLargerThan500 ? "4xl" : "3xl"}>I am a fullstack developer, <br /> with a passion for computer science</Text>
           <MyModel />  
    </> )
}

const LandingPage = () => {

    return(<Container>
        <LandingSection />
    </Container>);
}

export default LandingPage;