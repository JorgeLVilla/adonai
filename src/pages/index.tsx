import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Hero from "./Hero";

export default function Home() {

  return (
    <>
      <Head>
        <title>Adonai San Diego</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-regal-blue">
        <Hero />
      </div>
    </>
  );
}
