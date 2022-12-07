import Image from "next/image";
import React from "react";
import FooterBottom from "../components/footer/footerBottom";
import Navbar from "../components/navbar";
import SouthIcon from "@mui/icons-material/South";
import Head from "next/head";

function SuccessSubscription() {
  return (
    <div className="flex flex-col items-center w-full h-[100vh] overflow-x-hidden">
      <Head>
        <title>Gracias</title>
        <meta name="description" content="Compra exitosa" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="flex-1">
        <h1 className="my-12 text-5xl font-bold text-center font-play-fair">
          Gracias
        </h1>
        <span className="mx-auto relative flex aspect-square w-[10rem]">
          <Image src="/AmaYLiberateLogo.png" fill alt="" />
        </span>
        <div className="mx-auto max-w-[60ch] w-[95%]">
          <p className="my-8 text-xl font-bold font-play-fair ">
            ¡Felicitaciones! Acabas de adquirir con éxito el acceso al programa
            Ama & Liberate, para ayudarte a ganar percepción corporal de tus
            emociones.
          </p>
          <div className="flex ">
            <SouthIcon className="text-red-500 text-[2rem]" />
            <div className="w-[90%]">
              <p className="font-semibold">
                Por favor, lee con atención la siguiente información para que
                conozcas como trabajaremos
              </p>
              <span>
                <p className="font-semibold">PASO 1:</p>
                <p className="font-thin">
                  Revisa tu email para qe puedas empezar hoy mismo con la
                  primera práctica del programa Ama & Liberate.
                </p>
              </span>
              <span>
                <p className="font-semibold">PASO 2:</p>
                <p className="font-thin">
                  El resto de las prácticas se liberarán cada semana para que
                  puedas hacer ejercicios de percepción día por día.
                </p>
              </span>
              <span>
                <p className="font-semibold">PASO 3:</p>
                <p className="font-thin">
                  En tu semana 10 tendrás seccion 1:1con Daya Muneton, preguntas
                  y respuestas. Te comunicaremos el horario para hacer tu video
                  llamada.
                </p>
              </span>
              <span className="flex flex-col my-12">
                <p>Si tienes alguna duda, escribenos </p>
                <a
                  href="mailto:info@amayliberate.com"
                  className="text-blue-400 underline"
                >
                  info@amayliberate.com
                </a>
              </span>
            </div>

            <SouthIcon className="text-red-500 text-[2rem]" />
          </div>
        </div>
      </div>
      <FooterBottom />
    </div>
  );
}

export default SuccessSubscription;