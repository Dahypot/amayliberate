import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
// import { useRouter } from "next/router";
// import { useRef, useEffect } from "react";
import About from "../components/about";
import Content from "../components/content";
import Description from "../components/description";
import Footer from "../components/footer";
import Form from "../components/form";
import GiftForYou from "../components/giftforyou";
import Navbar from "../components/navbar";
import GiftButton from "../components/shared/giftButton";

export default function Home() {
  return (
    <div className="flex justify-center overflow-hidden">
      <Head>
        <title>Tu Regalo</title>
        <meta name="description" content="Tu regalo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col w-full">
        <Navbar />

        <div className="flex justify-center bg-[#fafbfb] p-2">
          <span className="relative flex aspect-square w-[7rem]">
            <Image src="/AmaYLiberateLogo.png" alt="" fill />
          </span>
        </div>

        <GiftForYou />
        <Description></Description>

        <Form />

        <div className="text-bold bg-gradient-to-b from-[#bdc9d9] to-[#f2e2f6] p-8 pb-20 flex flex-col items-center">
          <Content />
          <GiftButton />
          <div className="mt-8">
            <About></About>
          </div>
        </div>

        <span className="w-full overflow-hidden ">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/leopard-glassesGirl.jpg"
            alt=""
            className="object-cover w-[100vw] aspect-[16/9] max-h-[85vh] object-[center,40%]"
          />
        </span>
        <span className="bg-[#faf8f5] flex justify-center text-3xl p-8 font-play-fair font-bold">
          <p>
            <span className="inline-flex">
              El Arte Es La
              <span className="bg-[#e4f10c] mx-2 flex w-fit">Nueva</span>
            </span>
            Forma
            <br /> De Ganar Consciencia
            <br /> De la Percepción Corporal De <br />
            las Emociones.
          </p>
        </span>
        <Footer></Footer>
      </div>
    </div>
  );
}
