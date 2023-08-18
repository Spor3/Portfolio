/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 .\64d9ea9acfdd0f000df55bf9.glb 
*/

import { useRef } from 'react';
import { useGLTF} from '@react-three/drei';
import {useMediaQuery } from "@chakra-ui/react";
import Simone from "./Asset/model.glb";

export function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(Simone);
  const [isLargerThan500] = useMediaQuery('(min-width: 500px)')
  /* const { actions } = useAnimations(animations, group);

  useEffect(() => {
  actions['Armature|mixamo.com|Layer0'].play(); 
});  */

/* useFrame(({ clock }) => {
  group.current.rotation.y = clock.getElapsedTime();
})   */
  return (
    <mesh scale={isLargerThan500 ? 1 : 0.9} rotation={[0,0.7,0]}>
      <hemisphereLight intensity={1} position={[1,5,5]} groundColor="#111a21" />
       <pointLight intensity={0.08} position={[1,9,9]}/>
      <spotLight position={[-1, 1, -1]} angle={0.25} penumbra={1} intensity={1} castShadow shadow-mapSize={1024} /> 
    <group ref={group} {...props} dispose={null}>
      <primitive object={nodes.Hips}/>
      <skinnedMesh geometry={nodes.Wolf3D_Body.geometry} material={materials.Wolf3D_Body} skeleton={nodes.Wolf3D_Body.skeleton} />
      <skinnedMesh geometry={nodes.Wolf3D_Outfit_Bottom.geometry} material={materials.Wolf3D_Outfit_Bottom} skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton} />
      <skinnedMesh geometry={nodes.Wolf3D_Outfit_Footwear.geometry} material={materials.Wolf3D_Outfit_Footwear} skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton} />
      <skinnedMesh geometry={nodes.Wolf3D_Outfit_Top.geometry} material={materials.Wolf3D_Outfit_Top} skeleton={nodes.Wolf3D_Outfit_Top.skeleton} />
      <skinnedMesh geometry={nodes.Wolf3D_Hair.geometry} material={materials.Wolf3D_Hair} skeleton={nodes.Wolf3D_Hair.skeleton} />
      <skinnedMesh geometry={nodes.Wolf3D_Glasses.geometry} material={materials.Wolf3D_Glasses} skeleton={nodes.Wolf3D_Glasses.skeleton} />
      <skinnedMesh name="EyeLeft" geometry={nodes.EyeLeft.geometry} material={materials.Wolf3D_Eye} skeleton={nodes.EyeLeft.skeleton} morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary} morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences} />
      <skinnedMesh name="EyeRight" geometry={nodes.EyeRight.geometry} material={materials.Wolf3D_Eye} skeleton={nodes.EyeRight.skeleton} morphTargetDictionary={nodes.EyeRight.morphTargetDictionary} morphTargetInfluences={nodes.EyeRight.morphTargetInfluences} />
      <skinnedMesh name="Wolf3D_Head" geometry={nodes.Wolf3D_Head.geometry} material={materials.Wolf3D_Skin} skeleton={nodes.Wolf3D_Head.skeleton} morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences} />
      <skinnedMesh name="Wolf3D_Teeth" geometry={nodes.Wolf3D_Teeth.geometry} material={materials.Wolf3D_Teeth} skeleton={nodes.Wolf3D_Teeth.skeleton} morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences} />
    </group>
    </mesh>
  )
}

useGLTF.preload(Simone);