"use client";
import { usePathname } from "next/navigation";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, Float } from "@react-three/drei";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useRef, useEffect, useState } from "react";

function LiquidSphere() {
    const mesh = useRef();
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (mesh.current) {
            mesh.current.rotation.x = t * 0.1;
            mesh.current.rotation.y = t * 0.1;
        }
    });

    if (!mounted) return null;

    const isDark = theme === "dark";

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <Sphere ref={mesh} visible args={[1, 100, 200]} scale={2.5}>
                <MeshDistortMaterial
                    color={isDark ? "#2A1B54" : "#FFFFFF"}
                    emissive={isDark ? "#1E1B4B" : "#E0F2FE"}
                    emissiveIntensity={isDark ? 0.3 : 0.5}
                    roughness={0.1}
                    metalness={0.8}
                    distort={0.4}
                    speed={1.5}
                    transparent
                    opacity={0.9}
                />
            </Sphere>
        </Float>
    );
}

export default function LiquidBackground() {
    const pathname=usePathname();
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const isDark = theme === "dark";

    return (
        <div className={cn(
            "fixed top-0 left-0 w-full h-full -z-10 transition-colors duration-700",
            isDark ? "bg-[#0F172A]" : "bg-[#F8FAFC]"
        )}>
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }} gl={{ alpha: true }}>
                <ambientLight intensity={isDark ? 0.5 : 1} />
                <pointLight position={[10, 10, 10]} intensity={isDark ? 1 : 2} color={isDark ? "#818CF8" : "#FFFFFF"} />
                <pointLight position={[-10, -10, -10]} intensity={isDark ? 0.5 : 1} color={isDark ? "#4F46E5" : "#E0F2FE"} />
                <LiquidSphere />
            </Canvas>
            {/* Soft Grainy Overlay for texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>
    );
}
