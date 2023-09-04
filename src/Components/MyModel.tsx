import { Html, OrbitControls, Preload, useProgress } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { FC, Suspense } from "react";
import { Model } from "../model";
import { CircularProgress, CircularProgressLabel, useMediaQuery } from "@chakra-ui/react";

interface LoaderProps {
   size: "big" | "small"
}

const Loader:FC<LoaderProps> = ({size}) => {
   const {progress} = useProgress();

   return(
      <Html>
         <CircularProgress value={progress} color='violet' size={size === "big" ? "100px" : "50px"}>
            <CircularProgressLabel color="white">{progress.toFixed(0)}%</CircularProgressLabel>
         </CircularProgress>
      </Html>
   );
}

const MyModel = () => {

    const [isLargerThan500] = useMediaQuery('(min-width: 500px)');
    const [isLargerThan680] = useMediaQuery('(min-width: 680px)');



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
           display: isLargerThan680 ? "block" :"none"
           /* marginTop:"10vh" */
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