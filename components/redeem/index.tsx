import Image from "next/image";
import Link from "next/link";
import React from "react";
import RedeemForm from "./redeemForm";

function RedeemContent() {
   return (
      <>
         <span className="my-8 relative flex aspect-square h-[5rem]">
            <Image src="/AmaYLiberateLogo.png" alt="" fill />
         </span>
         <div className="w-[20ch] max-w-[95vw] text-center text-xl font-bold text-white">
            Ingresa tu código aquí y redime tu regalo
         </div>
         <RedeemForm />
         <p className="mt-2 text-white">*El código es de un solo uso</p>
         <div className="flex flex-col my-12 md:flex-row">
            <div className="my-16 flex justify-center">
               <span className=" relative rotate-[-5deg] flex aspect-[4/3] md:w-[24rem] max-w-[80vw] w-full shadow-[0px_0px_7rem_#26266b]">
                  <Image src="/A&Lgiftcard.png" alt="" fill />
               </span>
            </div>
            <div className="flex flex-col items-center justify-center mb-8 md:mb-0">
               <span className="text-white text-lg font-medium w-[95vw] max-w-[35ch] text-center">
                  <p>Una vez redimas este Gift Card</p>
                  <p>te llegará directo a tuemail el programa:</p>
                  <p>Ama y Libérate.</p>
               </span>
               <Link
                  href="/parte1"
                  className="bg-[#b592f8] p-2 text-white my-2"
               >
                  Más información
               </Link>
               <span className="relative flex aspect-[1.47/1] h-[10rem] w-[14rem] max-w-[95vw]">
                  <Image src="/A&LMockUps.png" alt="" fill />
               </span>
            </div>
         </div>
      </>
   );
}

export default RedeemContent;
