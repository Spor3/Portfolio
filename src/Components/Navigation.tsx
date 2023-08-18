import { Box, Container, Flex, Image, Text, useMediaQuery } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Logo from "../Asset/logo.png";

const Navigation = () => {

    const [isLargerThan500] = useMediaQuery('(min-width: 500px)')
    
    return(
    <Box position="fixed" top={0} right={0} w="100vw" bg="bg" py={5} zIndex={10}>
        <Container maxW="90vw">
        <Flex>
        <Flex flexDirection="row" alignItems="center" cursor="pointer" onClick={() => window.scrollTo({top: 0,left: 0,behavior: "smooth",})}>
         <Image src={Logo} width="50px" height="40px"/>
        {isLargerThan500 && <Text color="primary" fontSize="3xl" ms={2}>Spor<span style={{color:"#9F7AEA"}}>3</span></Text>}
        </Flex>

        <Flex flexDirection="row" alignItems="center" color="primary" ms="auto">
            <a href="#overview"><Text mx={3} fontSize={isLargerThan500 ? "xl" : "sm"} color="secondary">Overview</Text></a>
            <a href="#projects"><Text mx={3} fontSize={isLargerThan500 ? "xl" : "sm"} color="secondary">Projects</Text></a>
            <a href="#contact"> <Text mx={3} fontSize={isLargerThan500 ? "xl" : "sm"} color="secondary">Contact</Text></a>
        </Flex>
        </Flex>
        </Container>        
    </Box>);
}

export default Navigation;