/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 .\src\Laptop.glb 
*/

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import Laptop from "./Asset/Laptop.glb"
import {useMediaQuery } from "@chakra-ui/react";

export function LaptopModel(props) {
  const { nodes, materials } = useGLTF(Laptop);
  const [isLargerThan860] = useMediaQuery('(min-width: 860px)');
  return (
    <mesh rotation={[0.3,0.7,0]}>
    <group {...props} dispose={null} scale={isLargerThan860 ? 4 : 3}>
      <group position={[-0.143, 0.043, -0.256]} scale={0.001}>
        <group position={[0, -533.291, 439.625]} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 1, 1.564]}>
          <group position={[-36.659, -8.386, 0]}>
            <mesh geometry={nodes.mesh_id273.geometry} material={materials['1690']} position={[104.846, 49.001, 294.225]} scale={[1, 1, 0.219]} />
            <mesh geometry={nodes.mesh_id279.geometry} material={materials['1692']} position={[109.16, 32.803, 294.225]} scale={[1, 1, 0.219]} />
            <mesh geometry={nodes.mesh_id285.geometry} material={materials['1694']} position={[122.655, 48.964, 294.225]} scale={[1, 1, 0.219]} />
            <mesh geometry={nodes.mesh_id291.geometry} material={materials['1696']} position={[126.5, 33.502, 294.225]} scale={[1, 1, 0.219]} />
          </group>
          <group position={[-1.947, -8.162, 0]}>
            <mesh geometry={nodes.mesh_id305.geometry} material={materials['1698']} position={[109.16, 32.803, 294.225]} scale={[1, 1, 0.219]} />
            <mesh geometry={nodes.mesh_id306.geometry} material={materials['1700']} position={[104.846, 49.001, 294.225]} scale={[1, 1, 0.219]} />
            <mesh geometry={nodes.mesh_id307.geometry} material={materials['1702']} position={[126.5, 33.502, 294.225]} scale={[1, 1, 0.219]} />
            <mesh geometry={nodes.mesh_id308.geometry} material={materials['1704']} position={[122.655, 48.964, 294.225]} scale={[1, 1, 0.219]} />
          </group>
          <group position={[33.477, -8.178, 0]}>
            <mesh geometry={nodes.mesh_id319.geometry} material={materials['1706']} position={[109.16, 32.803, 294.225]} scale={[1, 1, 0.219]} />
            <mesh geometry={nodes.mesh_id320.geometry} material={materials['1708']} position={[104.846, 49.001, 294.225]} scale={[1, 1, 0.219]} />
            <mesh geometry={nodes.mesh_id321.geometry} material={materials['1710']} position={[126.5, 33.502, 294.225]} scale={[1, 1, 0.219]} />
            <mesh geometry={nodes.mesh_id322.geometry} material={materials['1712']} position={[122.655, 48.964, 294.225]} scale={[1, 1, 0.219]} />
          </group>
          <group position={[67.658, -8.357, 0]}>
            <mesh geometry={nodes.mesh_id333.geometry} material={materials['1714']} position={[109.16, 32.803, 294.225]} scale={[1, 1, 0.219]} />
            <mesh geometry={nodes.mesh_id334.geometry} material={materials['1716']} position={[104.846, 49.001, 294.225]} scale={[1, 1, 0.219]} />
            <mesh geometry={nodes.mesh_id335.geometry} material={materials['1718']} position={[126.5, 33.502, 294.225]} scale={[1, 1, 0.219]} />
            <mesh geometry={nodes.mesh_id336.geometry} material={materials['1720']} position={[122.655, 48.964, 294.225]} scale={[1, 1, 0.219]} />
          </group>
          <group position={[136.947, 2.087, 287.434]} rotation={[Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.mesh_id89.geometry} material={materials['1722']} rotation={[-Math.PI / 2, 0, 0]} scale={[0.827, 0.827, 0.042]} />
          </group>
          <mesh geometry={nodes.mesh_id115.geometry} material={materials['1512']} position={[98.286, -8.683, 292.619]} scale={[85.003, 17.747, 1.928]} />
          <mesh geometry={nodes.mesh_id118.geometry} material={materials['1514']} position={[150.42, -7.657, 293.33]} scale={[1, 1, 0.219]} />
          <mesh geometry={nodes.mesh_id124.geometry} material={materials['1516']} position={[168.213, -7.803, 294.225]} scale={[1, 1, 0.219]} />
          <mesh geometry={nodes.mesh_id130.geometry} material={materials['1518']} position={[186.509, -7.568, 294.225]} scale={[1, 1, 0.219]} />
          <mesh geometry={nodes.mesh_id136.geometry} material={materials['1520']} position={[185.725, 8.221, 294.225]} scale={[1, 1, 0.219]} />
          <mesh geometry={nodes.mesh_id137.geometry} material={materials['1522']} position={[167.602, 8.848, 294.225]} scale={[1, 1, 0.219]} />
          <mesh geometry={nodes.mesh_id165.geometry} material={materials['1524']} position={[167.602, 8.848, 294.225]} scale={[1, 1, 0.219]} />
          <mesh geometry={nodes.mesh_id171.geometry} material={materials['1526']} position={[133.117, 8.721, 294.225]} scale={[1, 1, 0.219]} />
          <mesh geometry={nodes.mesh_id177.geometry} material={materials['1528']} position={[150.217, 8.358, 294.225]} scale={[1, 1, 0.219]} />
          <mesh geometry={nodes.mesh_id183.geometry} material={materials['1530']} position={[115.995, 8.232, 294.225]} scale={[1, 1, 0.219]} />
          <mesh geometry={nodes.mesh_id189.geometry} material={materials['1532']} position={[98.34, 8.229, 294.225]} scale={[1, 1, 0.219]} />
          <mesh geometry={nodes.mesh_id195.geometry} material={materials['1534']} position={[81.17, 8.225, 294.225]} scale={[1, 1, 0.219]} />
          <mesh geometry={nodes.mesh_id201.geometry} material={materials['1536']} position={[63.648, 8.462, 294.225]} scale={[1, 1, 0.219]} />
          <mesh geometry={nodes.mesh_id207.geometry} material={materials['1538']} position={[45.88, 7.973, 294.225]} scale={[1, 1, 0.219]} />
          <mesh geometry={nodes.mesh_id213.geometry} material={materials['1540']} position={[45.88, 7.973, 294.225]} scale={[1.033, 1.033, 0.226]} />
          <mesh geometry={nodes.mesh_id219.geometry} material={materials['1542']} position={[28.445, -7.782, 294.225]} scale={[1, 1, 0.219]} />
          <mesh geometry={nodes.mesh_id225.geometry} material={materials['1544']} position={[46.278, -8.386, 294.225]} scale={[1, 1, 0.219]} />
          <mesh geometry={nodes.mesh_id231.geometry} material={materials['1546']} position={[28.144, 8.206, 294.225]} scale={[1, 1, 0.219]} />
          <mesh geometry={nodes.mesh_id237.geometry} material={materials['1548']} position={[11.043, -7.671, 294.225]} scale={[1, 1, 0.219]} />
          <mesh geometry={nodes.mesh_id243.geometry} material={materials['1550']} position={[-8.312, -7.885, 294.225]} scale={[1.372, 1.042, 0.219]} />
          <mesh geometry={nodes.mesh_id249.geometry} material={materials['1552']} position={[0.1, 7.804, 294.225]} scale={[2.407, 1.042, 0.219]} />
          <mesh geometry={nodes.mesh_id255.geometry} material={materials['1554']} position={[28.144, 8.206, 294.225]} scale={[1.187, 1.187, 0.259]} />
          <mesh geometry={nodes.mesh_id261.geometry} material={materials['1556']} position={[50.843, 40.399, 294.225]} scale={[1, 1, 0.219]} />
          <mesh geometry={nodes.mesh_id267.geometry} material={materials['1558']} position={[16.057, 40.385, 294.225]} scale={[1, 1, 0.219]} />
          <mesh geometry={nodes.mesh_id342.geometry} material={materials['1560']} position={[6.993, 56.549, 294.225]} scale={[1, 1, 0.219]} />
          <mesh geometry={nodes.mesh_id348.geometry} material={materials['1562']} position={[24.366, 56.664, 294.225]} scale={[1, 1, 0.219]} />
          <mesh geometry={nodes.mesh_id354.geometry} material={materials['1564']} position={[41.965, 56.763, 294.225]} scale={[1, 1, 0.219]} />
          <mesh geometry={nodes.mesh_id360.geometry} material={materials['1566']} position={[59.21, 56.509, 294.225]} scale={[1, 1, 0.219]} />
          <mesh geometry={nodes.mesh_id366.geometry} material={materials['1568']} position={[76.09, 56.373, 294.225]} scale={[1, 1, 0.219]} />
          <mesh geometry={nodes.mesh_id372.geometry} material={materials['1570']} position={[94.156, 56.471, 294.225]} scale={[1, 1, 0.219]} />
          <mesh geometry={nodes.mesh_id378.geometry} material={materials['1572']} position={[112.222, 56.453, 294.225]} scale={[1, 1, 0.219]} />
          <mesh geometry={nodes.mesh_id384.geometry} material={materials['1574']} position={[129.335, 56.201, 294.225]} scale={[1, 1, 0.219]} />
          <mesh geometry={nodes.mesh_id390.geometry} material={materials['1576']} position={[145.964, 56.31, 294.225]} scale={[1, 1, 0.219]} />
          <mesh geometry={nodes.mesh_id396.geometry} material={materials['1578']} position={[163.166, 56.53, 294.225]} scale={[1, 1, 0.219]} />
          <mesh geometry={nodes.mesh_id402.geometry} material={materials['1580']} position={[180.618, 56.513, 294.225]} scale={[1, 1, 0.219]} />
          <mesh geometry={nodes.mesh_id408.geometry} material={materials['1582']} position={[197.838, 56.748, 294.225]} scale={[1, 1, 0.219]} />
          <mesh geometry={nodes.mesh_id414.geometry} material={materials['1584']} position={[24.366, 56.664, 294.225]} scale={[1.002, 1.002, 0.219]} />
          <mesh geometry={nodes.mesh_id420.geometry} material={materials['1586']} position={[42.086, 70.265, 294.225]} scale={[1, 0.619, 0.219]} />
          <mesh geometry={nodes.mesh_id426.geometry} material={materials['1588']} position={[24.386, 70.424, 294.225]} scale={[1, 0.619, 0.219]} />
          <mesh geometry={nodes.mesh_id432.geometry} material={materials['1590']} position={[59.36, 70.214, 294.225]} scale={[1, 0.619, 0.219]} />
          <mesh geometry={nodes.mesh_id438.geometry} material={materials['1592']} position={[77.198, 70.012, 294.225]} scale={[1, 0.619, 0.219]} />
          <mesh geometry={nodes.mesh_id444.geometry} material={materials['1594']} position={[100.519, 69.931, 294.225]} scale={[1, 0.619, 0.219]} />
          <mesh geometry={nodes.mesh_id450.geometry} material={materials['1596']} position={[117.711, 69.926, 294.225]} scale={[1, 0.619, 0.219]} />
          <mesh geometry={nodes.mesh_id456.geometry} material={materials['1598']} position={[135.112, 70.088, 294.225]} scale={[1, 0.619, 0.219]} />
          <mesh geometry={nodes.mesh_id468.geometry} material={materials['1600']} position={[152.647, 70.029, 294.225]} scale={[1, 0.619, 0.219]} />
          <mesh geometry={nodes.mesh_id474.geometry} material={materials['1602']} position={[175.503, 70.242, 294.225]} scale={[1, 0.619, 0.219]} />
          <mesh geometry={nodes.mesh_id480.geometry} material={materials['1604']} position={[193.012, 70.223, 294.225]} scale={[1, 0.619, 0.219]} />
          <mesh geometry={nodes.mesh_id486.geometry} material={materials['1606']} position={[210.497, 70.258, 294.225]} scale={[1, 0.619, 0.219]} />
          <mesh geometry={nodes.mesh_id492.geometry} material={materials['1608']} position={[228.442, 70.347, 294.225]} scale={[1, 0.619, 0.219]} />
          <mesh geometry={nodes.mesh_id498.geometry} material={materials['1610']} position={[-9.876, 70.227, 294.225]} scale={[1, 0.619, 0.219]} />
          <mesh geometry={nodes.mesh_id504.geometry} material={materials['1612']} position={[-10.398, 57.138, 294.225]} scale={[1, 1, 0.219]} />
          <mesh geometry={nodes.mesh_id510.geometry} material={materials['1614']} position={[-6.292, 40.584, 294.225]} scale={[1.557, 1, 0.219]} />
          <mesh geometry={nodes.mesh_id516.geometry} material={materials['1616']} position={[-4.244, 24.512, 294.225]} scale={[1.868, 1, 0.219]} />
          <mesh geometry={nodes.mesh_id522.geometry} material={materials['1618']} position={[206.834, 40.8, 294.225]} scale={[1, 1, 0.219]} />
          <mesh geometry={nodes.mesh_id528.geometry} material={materials['1620']} position={[226.646, 40.669, 294.225]} scale={[1.255, 1, 0.219]} />
          <mesh geometry={nodes.mesh_id534.geometry} material={materials['1622']} position={[221.584, 56.711, 294.225]} scale={[1.902, 1, 0.219]} />
          <mesh geometry={nodes.mesh_id540.geometry} material={materials['1624']} position={[219.672, 24.827, 294.225]} scale={[2.197, 1, 0.219]} />
          <mesh geometry={nodes.mesh_id546.geometry} material={materials['1626']} position={[215.203, 8.163, 294.225]} scale={[2.728, 1, 0.219]} />
          <mesh geometry={nodes.mesh_id552.geometry} material={materials['1628']} position={[206.834, 40.8, 294.225]} scale={[1, 1, 0.219]} />
          <mesh geometry={nodes.mesh_id558.geometry} material={materials['1630']} position={[244.766, 57.059, 294.225]} scale={[0.752, 1, 0.219]} />
          <mesh geometry={nodes.mesh_id564.geometry} material={materials['1632']} position={[244.966, 40.512, 294.225]} scale={[0.752, 1, 0.219]} />
          <mesh geometry={nodes.mesh_id565.geometry} material={materials['1634']} position={[244.766, 57.059, 294.225]} scale={[0.752, 1, 0.219]} />
          <mesh geometry={nodes.mesh_id566.geometry} material={materials['1636']} position={[259.039, 57.16, 294.225]} scale={[0.752, 1, 0.219]} />
          <mesh geometry={nodes.mesh_id567.geometry} material={materials['1638']} position={[273.428, 56.927, 294.225]} scale={[0.752, 1, 0.219]} />
          <mesh geometry={nodes.mesh_id568.geometry} material={materials['1640']} position={[259.537, 40.871, 294.225]} scale={[0.752, 1, 0.219]} />
          <mesh geometry={nodes.mesh_id569.geometry} material={materials['1642']} position={[273.27, 40.744, 294.225]} scale={[0.752, 1, 0.219]} />
          <mesh geometry={nodes.mesh_id570.geometry} material={materials['1644']} position={[244.539, 24.452, 294.225]} scale={[0.752, 1, 0.219]} />
          <mesh geometry={nodes.mesh_id572.geometry} material={materials['1646']} position={[258.951, 24.338, 294.225]} scale={[0.752, 1, 0.219]} />
          <mesh geometry={nodes.mesh_id583.geometry} material={materials['1648']} position={[273.882, 24.938, 294.225]} scale={[0.752, 1, 0.219]} />
          <mesh geometry={nodes.mesh_id589.geometry} material={materials['1650']} position={[244.725, 7.79, 294.225]} scale={[0.752, 1, 0.219]} />
          <mesh geometry={nodes.mesh_id590.geometry} material={materials['1652']} position={[259.657, 7.908, 294.225]} scale={[0.752, 1, 0.219]} />
          <mesh geometry={nodes.mesh_id591.geometry} material={materials['1654']} position={[273.814, 8.275, 294.225]} scale={[0.752, 1, 0.219]} />
          <mesh geometry={nodes.mesh_id592.geometry} material={materials['1656']} position={[273.833, -7.657, 294.225]} scale={[0.752, 1, 0.219]} />
          <mesh geometry={nodes.mesh_id593.geometry} material={materials['1658']} position={[288.053, 0.244, 294.225]} scale={[0.752, 2.261, 0.219]} />
          <mesh geometry={nodes.mesh_id599.geometry} material={materials['1660']} position={[288.182, 32.949, 294.225]} scale={[0.752, 2.261, 0.219]} />
          <mesh geometry={nodes.mesh_id605.geometry} material={materials['1662']} position={[288.432, 56.547, 294.225]} scale={[0.752, 1, 0.219]} />
          <mesh geometry={nodes.mesh_id611.geometry} material={materials['1664']} position={[288.233, 70.398, 294.225]} scale={[0.752, 0.682, 0.219]} />
          <mesh geometry={nodes.mesh_id617.geometry} material={materials['1666']} position={[273.651, 70.206, 294.225]} scale={[0.752, 0.682, 0.219]} />
          <mesh geometry={nodes.mesh_id618.geometry} material={materials['1668']} position={[259.032, 70.127, 294.225]} scale={[0.752, 0.682, 0.219]} />
          <mesh geometry={nodes.mesh_id624.geometry} material={materials['1670']} position={[244.118, 70.171, 294.225]} scale={[0.752, 0.682, 0.219]} />
          <mesh geometry={nodes.mesh_id630.geometry} material={materials['1672']} position={[251.764, -7.966, 294.225]} scale={[1.788, 1, 0.219]} />
          <mesh geometry={nodes.mesh_id636.geometry} material={materials['1674']} position={[200.765, -16.629, 294.225]} scale={[0.752, 0.576, 0.219]} />
          <mesh geometry={nodes.mesh_id642.geometry} material={materials['1676']} position={[215.529, -16.868, 294.225]} scale={[0.752, 0.576, 0.219]} />
          <mesh geometry={nodes.mesh_id648.geometry} material={materials['1678']} position={[229.832, -16.866, 294.225]} scale={[0.752, 0.576, 0.219]} />
          <mesh geometry={nodes.mesh_id654.geometry} material={materials['1680']} position={[215.421, -5.821, 294.225]} scale={[0.752, 0.576, 0.219]} />
          <mesh geometry={nodes.mesh_id662.geometry} material={materials['1682']} position={[33.205, 40.629, 294.225]} scale={[1, 1, 0.219]} />
          <mesh geometry={nodes.mesh_id668.geometry} material={materials['1684']} position={[19.673, 24.565, 294.225]} scale={[1, 1, 0.219]} />
          <mesh geometry={nodes.mesh_id674.geometry} material={materials['1686']} position={[37.52, 24.433, 294.225]} scale={[1, 1, 0.219]} />
          <mesh geometry={nodes.mesh_id680.geometry} material={materials['1688']} position={[54.517, 24.185, 294.225]} scale={[1, 1, 0.219]} />
        </group>
        <group position={[0, -0.096, 23.067]}>
          <group position={[-0.052, 5.142, 0]}>
            <group position={[285.951, -72.865, 315.071]} rotation={[0.204, 0, 0]} scale={[1, 1, 1.058]}>
              <mesh geometry={nodes.mesh_id77.geometry} material={materials['1728']} rotation={[-0.195, 0, 0]} scale={[2.268, 1.72, 0.826]} />
            </group>
            <group position={[136.948, 33.355, 317.121]} rotation={[0.204, 0, 0]}>
              <group rotation={[0, 0.007, 0]} scale={[0.927, 1, 1]}>
                <mesh geometry={nodes.mesh_id27.geometry} material={materials['1732']} rotation={[-0.195, 0, 0]} scale={[1, 1.057, 0.038]} />
              </group>
            </group>
            <group position={[136.404, 140.342, 318.244]} rotation={[0.204, 0, 0]} scale={[0.668, 1, 1]}>
              <mesh geometry={nodes.mesh_id106.geometry} material={materials['1730']} rotation={[2.947, 0, -Math.PI]} scale={[-139.596, 13.046, 3.563]} />
            </group>
            <group position={[-12.541, -72.709, 317.173]} rotation={[0.204, 0, 0]} scale={[1, 1, 1.026]}>
              <mesh geometry={nodes.mesh_id811.geometry} material={materials['1728']} rotation={[-0.195, 0, 0]} scale={[2.268, 1.72, 0.826]} />
            </group>
          </group>
          <group position={[9.13, -70.07, 317.305]} rotation={[0.014, 0, 0]} scale={[1, 1.16, 0.065]}>
            <mesh geometry={nodes.mesh_id838.geometry} material={materials['1724']} rotation={[-Math.PI, 0, -Math.PI]} scale={[-9.205, 7.28, 4.603]} />
          </group>
          <group position={[264.973, -69.924, 316.066]} scale={[1, 1.124, 0.05]}>
            <mesh geometry={nodes.mesh_id840.geometry} material={materials['1726']} rotation={[-Math.PI, 0, -Math.PI]} scale={[-7.496, 8.188, 4.094]} />
          </group>
        </group>
      </group>
    </group>
    </mesh>
  )
}

useGLTF.preload(Laptop);