import { Box, Container, Flex, Image, Text } from "@chakra-ui/react";
import Logo from "../Asset/logo.webp";
import { navItems } from "../Constant/Const";
import { useMQuery } from "../ContextMediaQuery";

const Navigation = () => {

    const {isLargerThan500} = useMQuery();
    
    return(
    <Box position="fixed" top={0} right={0} w="100%" bg="bg" py={5} zIndex={1000}>
        <Container maxW="90vw">
        <Flex>
        <Flex flexDirection="row" alignItems="center" cursor="pointer" onClick={() => window.scrollTo({top: 0,left: 0,behavior: "smooth",})}>
         <Image alt="Logo" src={Logo} width="50px" height="40px"/>
        {isLargerThan500 && <Text color="primary" fontSize="3xl" ms={2}>Spor<span style={{color:"#805AD5"}}>3</span></Text>}
        </Flex>

        <Flex flexDirection="row" alignItems="center" color="primary" ms="auto">
            {
                navItems.map(el => <a key={el.name} href={el.to}><Text mx={3} fontSize={isLargerThan500 ? "xl" : "sm"} color="secondary">{el.name}</Text></a>)
            }
        </Flex>
        </Flex>
        </Container>        
    </Box>);
}

export default Navigation;