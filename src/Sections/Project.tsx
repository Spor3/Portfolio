import { Tilt } from "react-tilt";
import { Box, Divider, Flex, Heading, Image, Stack, Text,  } from "@chakra-ui/react";
import { FC } from "react";
import { Projects, textVariantsX, textVariantsY } from "../Constant/Const";
import { motion } from "framer-motion";
import {Container} from "../hoc/Index";

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

interface CardProps {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    schoolProject: boolean;
    link: string;
    externalLink: null | string;
    index:number;
}
 
const Card:FC<CardProps> = ({title, description, image, technologies, schoolProject, link, externalLink,index}) => {
   

    return(
      <motion.div key={title} initial="offscreen" whileInView="onscreen" style={{overflowX:"hidden"}} viewport={{ once: true, /* amount: 0.8 */ }} variants={textVariantsX}>
      <Box m={10} boxShadow="xl">
        <Tilt options={defaultOptions} style={{maxWidth:"400px", backgroundColor: "#1a2832", padding:"20px", borderRadius: "10px"}} key={title}>
        <a target="_blank" rel="noreferrer" href={link}>
          <Flex justifyContent="center">
                  <Image
                    src={image}
                    alt={title}
                    borderRadius='lg'
                    h="150px"
                  />
                  </Flex>
                  <Stack mt='6' spacing='3'>
                    <Heading size='md' color="primary">{title}</Heading>
                    <Text color="secondary">
                      {description}
                      {externalLink && <a target="_blank" rel="noreferrer" style={{color:"#9F7AEA"}} href={externalLink}> {externalLink}</a>}
                    </Text>
                  </Stack>
                <Divider my={3} color="primary"/>
                {
                  technologies.map((e,i) => <Text display="inline" color={i === 1 ? "violet" : i === 2 ? "#DC136C" : i === 3 ? "#FFFFB3" : "#31AFD4"} me={2}>#{e}</Text>)
                }
                  </a>
            </Tilt>
            </Box>
            </motion.div>
    )
}


const Project = () => {

    return(
            <Flex flexDirection="column" className="min-h-100" id="projects">
            <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true, /* amount: 0.8 */ }} variants={textVariantsY}>
            <Heading color="primary" fontSize="6xl" pt={20}>Projects. </Heading >
            </motion.div>
            <Flex flexWrap="wrap" alignItems="center" justifyContent="space-around" my="auto" >
                {Projects.map((e,i) => <Card index={i} title={e.title} description={e.description} image={e.image} technologies={e.technologies} schoolProject={e.schoolProject} link={e.link} externalLink={e.externalLink} />)}
            </Flex>
            </Flex>)
}

export default Container(Project);