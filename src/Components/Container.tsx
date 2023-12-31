import { Container as ChakraContainer } from "@chakra-ui/react"
import { FC } from "react";
import { ContainerProps } from "../Constant/Interface";


const Container:FC<ContainerProps> = ({children, id}) => {

    return (<ChakraContainer maxW='90vw' className='min-h-100' id={id}>
        {children}
    </ChakraContainer>)
}

export default Container;