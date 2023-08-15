import { Container as ChakraContainer } from "@chakra-ui/react"

const Container = (Component:any) => 
    function HOC() {
        return(<ChakraContainer maxW='90vw' className='min-h-100'>
            <Component />
        </ChakraContainer>)
    }


export default Container;