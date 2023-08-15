import './App.css';
import { ChakraProvider, Box } from '@chakra-ui/react';
import LandingPage from './Sections/LandingPage';
import theme from './ChakraTheme/Theme';
import Overview from './Sections/Overview';
import Project from './Sections/Project';
import Contact from './Sections/Contact';
import Navigation from './Components/Navigation';
import { BrowserRouter } from 'react-router-dom';

function App() {
   
  return (
    <BrowserRouter>
   <ChakraProvider theme={theme}>
      <Box bg="bg">
    <Navigation />
   <LandingPage />
   <Overview />
   <Project />
   <Contact />
   </Box>
  </ChakraProvider>
  </BrowserRouter>);
}

export default App;
