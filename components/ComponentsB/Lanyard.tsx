// Componente de crachá elástico com visual em código puro (sem GLB ou textura)
'use client';

import { Html } from '@react-three/drei'
import { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Lightformer } from '@react-three/drei';
import {
  BallCollider,
  CuboidCollider,
  Physics,
  RigidBody,
  useRopeJoint,
  useSphericalJoint,
  RigidBodyProps,
} from '@react-three/rapier';
import * as THREE from 'three';

export default function CracaElastico() {
  return (
    <div className="w-full h-screen">
      <Canvas camera={{ position: [0, 0, 30], fov: 20 }}>
        <ambientLight intensity={Math.PI} />
        <Physics gravity={[0, -40, 0]} timeStep={1 / 60}>
          <Cordao />
        </Physics>
        <Environment blur={0.75}>
          <Lightformer intensity={2} color="white" position={[0, -1, 5]} scale={[100, 0.1, 1]} />
        </Environment>
      </Canvas>
    </div>
  );
}

function Cordao({ maxSpeed = 50, minSpeed = 0 }: { maxSpeed?: number; minSpeed?: number }) {
  const vec = new THREE.Vector3();
  const dir = new THREE.Vector3();
  const rot = new THREE.Vector3();
  const ang = new THREE.Vector3();

  const fixed = useRef<any>(null);
  const j1 = useRef<any>(null);
  const j2 = useRef<any>(null);
  const j3 = useRef<any>(null);
  const card = useRef<any>(null);
  const [curve] = useState(() => new THREE.CatmullRomCurve3([new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()]));
  const [dragged, drag] = useState<false | THREE.Vector3>(false);

  const segmentProps: any = {
    type: 'dynamic' as RigidBodyProps['type'],
    canSleep: true,
    colliders: false,
    angularDamping: 4,
    linearDamping: 4,
  };

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]);
  useSphericalJoint(j3, card, [[0, 0, 0], [0, 1.45, 0]]);

  useFrame((state, delta) => {
    if (dragged && typeof dragged !== 'boolean') {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));
      [card, j1, j2, j3, fixed].forEach((ref) => ref.current?.wakeUp());
      card.current?.setNextKinematicTranslation({
        x: vec.x - dragged.x,
        y: vec.y - dragged.y,
        z: vec.z - dragged.z,
      });
    }
    if (fixed.current) {
      [j1, j2].forEach((ref) => {
        if (!ref.current.lerped) ref.current.lerped = new THREE.Vector3().copy(ref.current.translation());
        const clampedDistance = Math.max(0.1, Math.min(1, ref.current.lerped.distanceTo(ref.current.translation())));
        ref.current.lerped.lerp(ref.current.translation(), delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed)));
      });
      curve.points[0].copy(j3.current.translation());
      curve.points[1].copy(j2.current.lerped);
      curve.points[2].copy(j1.current.lerped);
      curve.points[3].copy(fixed.current.translation());
      ang.copy(card.current.angvel());
      rot.copy(card.current.rotation());
      card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z });
    }
  });

  return (
    <>
      <group position={[0, 4, 0]}>
        <RigidBody ref={fixed} {...segmentProps} type="fixed" />
        <RigidBody ref={j1} position={[0.5, 0, 0]} {...segmentProps}><BallCollider args={[0.1]} /></RigidBody>
        <RigidBody ref={j2} position={[1, 0, 0]} {...segmentProps}><BallCollider args={[0.1]} /></RigidBody>
        <RigidBody ref={j3} position={[1.5, 0, 0]} {...segmentProps}><BallCollider args={[0.1]} /></RigidBody>
        <RigidBody
          ref={card}
          position={[2, 0, 0]}
          {...segmentProps}
          type={dragged ? 'kinematicPosition' : 'dynamic'}>
          <CuboidCollider args={[0.8, 1.125, 0.01]} />
          <mesh
            scale={2.2}
            position={[0, -1.2, -0.05]}
            onPointerOver={() => document.body.style.cursor = 'grab'}
            onPointerOut={() => document.body.style.cursor = 'default'}
            onPointerUp={(e: any) => (e.target.releasePointerCapture(e.pointerId), drag(false))}
            onPointerDown={(e: any) => (e.target.setPointerCapture(e.pointerId), drag(new THREE.Vector3().copy(e.point).sub(vec.copy(card.current.translation()))))}>
            <boxGeometry args={[1.5, 2, 0.1]} />
			<Html center>
  <div style={{
    width: '150px',
    textAlign: 'center',
    fontSize: '12px',
    fontWeight: 600,
    color: 'white',
    fontFamily: 'sans-serif',
    textShadow: '0 0 4px rgba(0,0,0,0.5)'
  }}>
    Branding não é só um logo.<br />
    É como sua empresa é lembrada.<br />
    Posicione, conecte, destaque.
  </div>
</Html>
            <meshStandardMaterial color="#4285F4" metalness={0.3} roughness={0.2}>
  <meshBasicMaterial attach="material" color="white" />
</meshStandardMaterial>

          </mesh>
        </RigidBody>
      </group>
     
    </>
  );
}