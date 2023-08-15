import './App.css';
import { ChakraProvider, Box } from '@chakra-ui/react';
import LandingPage from './Sections/LandingPage';
import theme from './ChakraTheme/Theme';

function App() {
   
  return (
   <ChakraProvider theme={theme}>
      <Box bg="bg">
   <LandingPage />
   </Box>
  </ChakraProvider>);
}

export default App;
