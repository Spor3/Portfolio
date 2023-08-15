import { Container as ChakraContainer } from "@chakra-ui/react"
import { FC } from "react";

interface ContainerProps {
    children: JSX.Element
}

const Container:FC<ContainerProps> = ({children}) => {

    return (<ChakraContainer maxW='90vw' className='min-h-100'>
        {children}
    </ChakraContainer>)
}

export default Container;