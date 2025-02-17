'use client';
import React, { useEffect, useState, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { text, curve, translate } from './anim';
import { usePathname } from 'next/navigation';
// Define the type for the routes object
const routes: { [key: string]: string } = {
  "/": "Home",
  "/annoucements": "Announcements",
  "/about": "About",
  "/archive": "Archive",
};

// Define a type for animation props
const anim = (variants: any) => {
  return {
    variants,
    initial: "initial",
    animate: "enter",
    exit: "exit",
  };
};

// Define types for the component props
interface CurveProps {
  children: ReactNode;
  backgroundColor: string;
}

interface Dimensions {
  width: number;
  height: number;
}

export default function Curve({ children, backgroundColor }: CurveProps) {
  const router = useRouter();
  const [dimensions, setDimensions] = useState<Dimensions>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function resize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    resize();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className='page curve' style={{ backgroundColor }}>
      <div style={{ opacity: dimensions.width == null ? 1 : 0 }} className='background' />
      <motion.p className='route' {...anim(text)}>
        {routes[usePathname()]}
      </motion.p>
      {dimensions.width !== null && <SVG width={dimensions.width} height={dimensions.height} />}
      {children}
    </div>
  );
}

interface SVGProps {
  width: number;
  height: number;
}

const SVG = ({ height, width }: SVGProps) => {
  const initialPath = `
    M0 300 
    Q${width / 2} 0 ${width} 300
    L${width} ${height + 300}
    Q${width / 2} ${height + 600} 0 ${height + 300}
    L0 0
  `;

  const targetPath = `
    M0 300
    Q${width / 2} 0 ${width} 300
    L${width} ${height}
    Q${width / 2} ${height} 0 ${height}
    L0 0
  `;

  return (
    <motion.svg {...anim(translate)}>
      <motion.path {...anim(curve(initialPath, targetPath))} />
    </motion.svg>
  );
};
