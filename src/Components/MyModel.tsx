import { OrbitControls, Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Model } from "../model";
import { useMediaQuery } from "@chakra-ui/react";



const MyModel = () => {

    const [isLargerThan500] = useMediaQuery('(min-width: 500px)')

    return (<Canvas
        camera={{ position: [2, 0, 12.25], fov: 4}}
        shadows
        /* frameloop='demand' */
        gl={{preserveDrawingBuffer: true}}
        style={{
           /* backgroundColor: '#111a21', */
           width: '100%',
           minHeight: '100vh',
           position:"absolute",
           top:"0px",
           left:"0px"
        }}
     >
        <Suspense fallback={<>Loading...</>}>
            <OrbitControls enableZoom={false}  maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
            <Model position={[0, isLargerThan500 ? -1.8 : -1.95, -0.1]} /> 
        </Suspense>
        <Preload all />
     </Canvas>);
}

export default MyModel;