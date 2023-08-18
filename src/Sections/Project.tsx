import { Tilt } from "react-tilt";
import Container from "../Components/Container";
import { Box, Button, ButtonGroup, CardBody, CardFooter, Divider, Flex, Heading, Image, Stack, Text,  } from "@chakra-ui/react";

const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            35,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

const Card = () => {
   

    return(
        <Tilt options={defaultOptions} style={{maxWidth:"300px", backgroundColor: "white", padding:"20px", borderRadius: "10px"}} >
                  <Image
                    src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                  />
                  <Stack mt='6' spacing='3'>
                    <Heading size='md'>Living room Sofa</Heading>
                    <Text>
                      This sofa is perfect for modern tropical spaces, baroque inspired
                      spaces, earthy toned spaces and for people who love a chic design with a
                      sprinkle of vintage design.
                    </Text>
                    <Text color='blue.600' fontSize='2xl'>
                      $450
                    </Text>
                  </Stack>
                <Divider />
                  <ButtonGroup spacing='2'>
                    <Button variant='solid' colorScheme='blue'>
                      Buy now
                    </Button>
                    <Button variant='ghost' colorScheme='blue'>
                      Add to cart
                    </Button>
                  </ButtonGroup>
            </Tilt>
    )
}


const Project = () => {

    return(
        <Container id="projects">
            <Flex flexDirection="column" className="min-h-100">
            <Heading color="primary" fontSize="6xl" pt={20}>Projects. </Heading >
            <Flex flexWrap="wrap" alignItems="center" justifyContent="space-around" my="auto">
                <Card />
                <Card />
                <Card />
            </Flex>
            </Flex> 
        </Container>)
}

export default Project;