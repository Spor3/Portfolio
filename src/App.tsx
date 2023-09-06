import './App.css';
import { ChakraProvider, Box } from '@chakra-ui/react';
import LandingPage from './Sections/LandingPage';
import theme from './ChakraTheme/Theme';
import Overview from './Sections/Overview';
import Project from './Sections/Project';
import Contact from './Sections/Contact';
import Navigation from './Components/Navigation';
import { BrowserRouter } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import { MediaQueryProvider } from './ContextMediaQuery';
import { useEffect } from 'react';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
   
  return (
    <BrowserRouter>
      <MediaQueryProvider>
        <ChakraProvider theme={theme}>
          <Box bg="bg">
            <motion.div className="progress-bar" style={{ scaleX }} />
              <Navigation />
              <LandingPage />
              <Overview />
              <Project />
              <Contact />
          </Box>
        </ChakraProvider>
      </MediaQueryProvider>
    </BrowserRouter>);
}

export default App;
