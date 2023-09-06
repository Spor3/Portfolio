import { Tilt } from "react-tilt";
import { Box, Divider, Flex, Heading, Image, Stack, Text,  } from "@chakra-ui/react";
import { FC } from "react";
import { defaultOptions, textVariantsX } from "../Constant/Const";
import { motion } from "framer-motion";
import { CardProps } from "../Constant/Interface";
import { useMQuery } from "../ContextMediaQuery";


const Card:FC<CardProps> = ({title, description, image, technologies, schoolProject, link, externalLink,index}) => {
   
    const {...mediaQuery} = useMQuery();

    return(
      <motion.div key={title} initial="offscreen" whileInView="onscreen" style={{overflowX:"hidden"}} viewport={{ once: true, /* amount: 0.8 */ }} variants={textVariantsX}>
      <Box my={10} mx={mediaQuery.isLargerThan680 ? 10 : 2} boxShadow="xl">
        <Tilt options={defaultOptions} style={{maxWidth:"400px", backgroundColor: "#1a2832", padding:"20px", borderRadius: "10px"}}>
         <a target="_blank" rel="noreferrer" href={link}> 
          <Flex justifyContent="center">
                  <Image
                    src={image}
                    alt={title}
                    title={title}
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
                  technologies.map((e,i) => <Text key={Math.random() * 10} display="inline" color={i === 1 ? "violet" : i === 2 ? "#DC136C" : i === 3 ? "#FFFFB3" : "#31AFD4"} me={2}>#{e}</Text>)
                }
           </a>
            </Tilt>
            </Box>
            </motion.div>
    )
}

export default Card;