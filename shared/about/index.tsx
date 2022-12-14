import Image from "next/image";
import React from "react";

function About() {
   return (
      <div>
         <h2 className="mb-8 text-lg font-bold">Conoce tu host...</h2>
         <div className="flex flex-col items-center">
            <span>
               <p className="text-6xl font-haviland">Hola, soy</p>
               <p className="text-4xl font-semibold font-play-fair">
                  Daya Muneton
               </p>
               <p className="font-semibold">La fundadora de Ama y Libérate</p>
            </span>
            <span className="flex aspect-square relative w-[10rem] rounded-full overflow-hidden bg-[#f9d1c3] m-4">
               <Image src="/fotodaya1-1.png" alt="" fill />
            </span>
            <span className="flex flex-col gap-8 max-w-[50ch] font-light ">
               <p>
                  Durante 20 años experimenté como artista la facilidad que te
                  brinda el arte para conectar las teorías de las emociones con
                  las sensaciones, porque al igual que muchas personas viví el
                  dolor al punto de estar agotada y sentir desinterés por vivir,
                  el arte me ayudó a comprender como llegué ahí y finalmente
                  pude liberarme de eso.
               </p>
               <p>
                  Si alguien sabe usar el arte como un recurso que te ayuda a
                  ganar claridad sobre tus emociones, soy yo.
               </p>
               <p>
                  Un miedo y un dolor arraigado volvío cuando mi hijo comenzó a
                  vivir la misma situación, siento que lo mejor que puedo hacer
                  por él, es ayudarme a mi misma, ser valiente recursiva y
                  creativa. Cuando no tienes una estrategia basada en
                  conocimiento sobre ti, que sea adaptable, medible y que
                  sientas que avanzas, hace que llegues a estados de
                  incertidumbre, miedo y estancamiento.
               </p>
               <p>
                  Soy artista y emprendedora, me gusta escalar y crecer, así que
                  haré lo humanamente posible para ayudarlo, me siento
                  comprometida y por esta razón creé AMA y LIBÉRATE, un programa
                  que me permite compartir todo lo que hemos aprendido, no
                  hacerlo me hace complice del dolor de muchas personas.
               </p>
               <p>Eres mi inspiración y vamos a salir de esto.</p>
            </span>
         </div>
      </div>
      // </div>
   );
}

export default About;
