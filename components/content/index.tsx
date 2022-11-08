import React from "react";
import Card from "./card";

function Content() {
  return (
    <div>
      <h2>Lo que recibirás...</h2>
      <div className="flex flex-col items-center">
        <span className="flex items-end w-11/12 gap-2">
          <p className="text-[5rem] font-bold text-white leading-[5rem]">3</p>
          <p className="text-2xl font-bold">
            Técnicas que puedes hacer desde hoy y comenzar a ver resultados ​
          </p>
        </span>
        <div className="flex flex-col gap-2 my-4 md:flex-row">
          <Card
            title="Técnica #1"
            text="Incluye en tu aprendizaje, formas que te faciliten la percepción corporal de las emociones."
          />
          <Card
            title="Técnica #2"
            text="Hacerte muchas preguntas en situaciones específicas que te ayudan a comprender como te afecta  no tener percepción corporal de tus emociones. "
          />
          <Card
            title="Técnica #3"
            text="Traza una línea de progreso y visualiza tu avance en tus procesos de cambio de mentalidad, emocionales y puedas observar tu transición de un modelo mental a otro."
          />
        </div>
      </div>
    </div>
  );
}

export default Content;
