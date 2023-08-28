import { Container as ChakraContainer } from "@chakra-ui/react"

const Container = (Component:any) => 
    function HOC() {
        return(<ChakraContainer maxW='90vw'>
            <Component />
        </ChakraContainer>)
    }


export default Container;