import "@/styles/globals.css";
import { useState } from "react";
import type { AppProps } from "next/app";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function App({ Component, pageProps }: AppProps) {
  const [translate, setTranslate] = useState(false);

  return (
    <div className="bg-regal-blue">
      <Navbar translate={translate} setTranslate={setTranslate}/>
      <Component {...pageProps}  translate={translate}/>
      <Footer />
    </div>
  );
}
