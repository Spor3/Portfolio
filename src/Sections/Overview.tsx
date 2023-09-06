import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import BallCanvas from "../Components/Ball";
import { FEtechnologies, BEtechnologies, textVariantsY, textVariantsX } from "../Constant/Const";
import {  motion } from "framer-motion";
import {Container} from "../hoc/Index";
import { useMQuery } from "../ContextMediaQuery";


const Overview = () => {
    const {...mediaQuery} = useMQuery();
    
    return(
             <Flex flexDirection="column" className="min-h-100" id="overview">
                <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true, /* amount: 0.8 */  }} variants={textVariantsY}>
                    <Heading color="primary" fontSize="6xl" pt={20}>Overview. </Heading >    
                    <Text mt={3} color="secondary" fontSize="xl">I'm a dynamic developer at the exciting inception of my professional journey.<br /> Proficient in React, .NET, and SQL Server, I combine the artistry of frontend design with the precision of backend development. <br />My expertise extends to crafting seamless user experiences and architecting robust databases that power applications.</Text>
                </motion.div>
                <motion.div className={mediaQuery.isLargerThan680 ? "" : "d-none"} initial="offscreen" whileInView="onscreen" viewport={{ once: true, /* amount: 0.8 */  }} variants={textVariantsX}>
                    <Text my="auto" mb={10} pt={10} color="primary" fontSize="3xl" fontWeight="bold">Frontend <span style={{color:"#9F7AEA"}}>skills</span></Text>
                </motion.div>
                <Flex className={mediaQuery.isLargerThan680 ? "" : "d-none"} flexDirection="row" flexWrap="wrap" alignItems="center" justifyContent="center">
                    {FEtechnologies.map(e => <Box key={e.name}><BallCanvas icon={e.logo}/></Box>)}
                </Flex>
                <motion.div className={mediaQuery.isLargerThan680 ? "" : "d-none"} initial="offscreen" whileInView="onscreen" viewport={{ once: true,  /* amount: 0.8 */ }} variants={textVariantsX}>
                    <Text my={10} color="primary" fontSize="3xl" fontWeight="bold">Backend <span style={{color:"#9F7AEA"}}>skills</span></Text>
                </motion.div>
                <Flex pb={10} className={mediaQuery.isLargerThan680 ? "" : "d-none"} flexDirection="row" flexWrap="wrap" alignItems="center" justifyContent="center">
                    {BEtechnologies.map(e => <Box key={e.name}><BallCanvas icon={e.logo}/></Box>)}
                </Flex>
             </Flex>
             );
}

export default Container(Overview);