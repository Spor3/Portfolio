import { Box, Flex, Heading, Text, useMediaQuery } from "@chakra-ui/react";
import Container from "../Components/Container";
import BallCanvas from "../Components/Ball";
import { FEtechnologies, BEtechnologies } from "../Constant/Const";

const Overview = () => {
    const [isLargerThan500] = useMediaQuery('(min-width: 500px)');
    return(
        <Container id="overview">
             <Flex flexDirection="column" className="min-h-100">
            <Heading color="primary" fontSize="6xl" pt={20}>Overview. </Heading > 
            <Text mt={3} color="secondary" fontSize={isLargerThan500 ? "xl" : "md"}>I'm a dynamic developer at the exciting inception of my professional journey.<br /> Proficient in React, .NET, and SQL Server, I combine the artistry of frontend design with the precision of backend development. <br />My expertise extends to crafting seamless user experiences and architecting robust databases that power applications.</Text>
            <Text my="auto" mb={10} pt={10} color="primary" fontSize="3xl" fontWeight="bold">Frontend <span style={{color:"#9F7AEA"}}>skills</span></Text>
            <Flex flexDirection="row" flexWrap="wrap" alignItems="center" justifyContent="center">
            {FEtechnologies.map(e => <Box key={e.name}><BallCanvas icon={e.logo}/></Box>)}
            </Flex>
            <Text my={10} color="primary" fontSize="3xl" fontWeight="bold">Backend <span style={{color:"#9F7AEA"}}>skills</span></Text>
            <Flex pb={10} flexDirection="row" flexWrap="wrap" alignItems="center" justifyContent="center">
            {BEtechnologies.map(e => <Box key={e.name}><BallCanvas icon={e.logo}/></Box>)}
            </Flex>
            </Flex>
        </Container>)
}

export default Overview;