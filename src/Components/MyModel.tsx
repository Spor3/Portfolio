import { Html, OrbitControls, Preload, useProgress } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { FC, Suspense } from "react";
import { Model } from "../model";
import { Box, CircularProgress, CircularProgressLabel, Flex } from "@chakra-ui/react";
import { LoaderProps } from "../Constant/Interface";
import { useMQuery } from "../ContextMediaQuery";

const Loader:FC<LoaderProps> = ({size}) => {
   const {progress} = useProgress();

   return(
      <Html>
         <CircularProgress value={progress} color='rgb(159, 122, 234)' size={size === "big" ? "100px" : "50px"} >
            <CircularProgressLabel color="#A0AEC0">{progress.toFixed(0)}%</CircularProgressLabel>
         </CircularProgress>
      </Html>
   );
}

const MyModel = () => {

    const {isLargerThan500,isLargerThan630,isLargerThan680} = useMQuery();



    return (<Canvas
        camera={{ position: [2, 0, 12.25], fov: 4}}
        shadows
        /* frameloop='demand' */
        gl={{preserveDrawingBuffer: true}}
        style={{
           /* backgroundColor: '#111a21', */
           width: '100%',
           height: '100vh',
           position:"absolute",
           top:"0px",
           left:"0px",
           cursor:"grab",
           display: "block",
           zIndex:1
           
        }}
     >
        <Suspense fallback={<Loader size="big"/>}>
            <OrbitControls enableZoom={false}  maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
            <Model position={[0, isLargerThan500 ? -1.8 : -1.95, -0.1]} /> 
        </Suspense>
        <Preload all />
     </Canvas>);
}
export {Loader};
export default MyModel;