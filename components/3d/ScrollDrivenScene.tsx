"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars } from "@react-three/drei";
import type { MutableRefObject } from "react";
import { Suspense, useEffect, useRef, useState } from "react";
import * as THREE from "three";

function ScrollMeshes({
  progressRef,
}: {
  progressRef: MutableRefObject<number>;
}) {
  const group = useRef<THREE.Group>(null);
  const inner = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    const t = progressRef.current;
    if (group.current) {
      group.current.rotation.y = THREE.MathUtils.lerp(
        group.current.rotation.y,
        t * Math.PI * 2.8,
        0.08,
      );
      group.current.rotation.x = THREE.MathUtils.lerp(
        group.current.rotation.x,
        Math.sin(t * Math.PI) * 0.55,
        0.06,
      );
      group.current.position.z = THREE.MathUtils.lerp(
        group.current.position.z,
        -1.2 + t * 2.4,
        0.05,
      );
    }
    if (inner.current) {
      inner.current.rotation.z += delta * 0.15;
    }
  });

  return (
    <group ref={group}>
      <Float speed={1.6} rotationIntensity={0.35} floatIntensity={0.6}>
        <group ref={inner}>
          <mesh>
            <icosahedronGeometry args={[1.15, 1]} />
            <meshStandardMaterial
              color="#22d3ee"
              wireframe
              metalness={0.35}
              roughness={0.25}
              emissive="#0e7490"
              emissiveIntensity={0.35}
            />
          </mesh>
          <mesh rotation={[0.9, 0.6, 0.2]}>
            <torusKnotGeometry args={[0.42, 0.12, 100, 16]} />
            <meshStandardMaterial
              color="#a5b4fc"
              metalness={0.5}
              roughness={0.28}
              emissive="#312e81"
              emissiveIntensity={0.45}
            />
          </mesh>
        </group>
      </Float>
    </group>
  );
}

function SceneInner({
  progressRef,
}: {
  progressRef: MutableRefObject<number>;
}) {
  return (
    <>
      <ambientLight intensity={0.35} />
      <directionalLight position={[5, 8, 6]} intensity={1.15} color="#f8fafc" />
      <pointLight position={[-6, -2, 4]} intensity={0.8} color="#22d3ee" />
      <Stars
        radius={80}
        depth={28}
        count={3500}
        factor={3.2}
        saturation={0}
        fade
        speed={0.35}
      />
      <ScrollMeshes progressRef={progressRef} />
    </>
  );
}

function usePrefersReducedMotion() {
  const [reduce, setReduce] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const fn = () => setReduce(mq.matches);
    fn();
    mq.addEventListener("change", fn);
    return () => mq.removeEventListener("change", fn);
  }, []);
  return reduce;
}

export function ScrollDrivenScene() {
  const progressRef = useRef(0);
  const reduceMotion = usePrefersReducedMotion();

  useEffect(() => {
    const update = () => {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      progressRef.current = max > 0 ? window.scrollY / max : 0;
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  if (reduceMotion) {
    return (
      <div
        className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-950/40 via-zinc-950 to-zinc-950"
        aria-hidden
      />
    );
  }

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 opacity-[0.42] md:opacity-55"
      aria-hidden
    >
      <Canvas
        camera={{ position: [0, 0.2, 6.2], fov: 42 }}
        dpr={[1, 2]}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
        }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <SceneInner progressRef={progressRef} />
        </Suspense>
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950/20 to-zinc-950" />
    </div>
  );
}
