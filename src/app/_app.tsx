import type { AppProps } from 'next/app';

import { AnimatePresence } from "framer-motion";
import "./globals.css";
import "@/app/components/Layout/Curve/style.scss";

export default function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <AnimatePresence mode='wait'>
      <Component key={router.route} {...pageProps} />
   </AnimatePresence>
  )
}