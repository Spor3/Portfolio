import { Flex, Heading, Text } from "@chakra-ui/react";
import { Projects, textVariantsY } from "../Constant/Const";
import { motion } from "framer-motion";
import {Container} from "../hoc/Index";
import Card from "../Components/Card";
import { useMQuery } from "../ContextMediaQuery";


const Project = () => {

    const {isLargerThan500} = useMQuery();

    return(
            <Flex flexDirection="column" className="min-h-100" id="projects">
            <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true, /* amount: 0.8 */ }} variants={textVariantsY}>
            <Heading color="primary" fontSize="6xl" pt={20}>Projects. </Heading >
            <Text mt={3} color="secondary" fontSize={isLargerThan500 ? "xl" : "md"}>These projects represent my continuous journey of growth, learning, and evolution as a creative professional.<br /> I hope you find inspiration and insight in each of these ventures, and I'm excited to discuss how my skills can contribute to future collaborations.<br /> Feel free to reach out, and let's create something extraordinary together!</Text>
            </motion.div>
            <Flex flexWrap="wrap" alignItems="center" justifyContent="space-around" my="auto" >
                {Projects.map((e,i) => <Card key={e.title}  {...{...e,index: i}} />)}
            </Flex>
            </Flex>)
}

export default Container(Project);