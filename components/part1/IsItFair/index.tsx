import React from "react";

function IsItFair() {
   return (
      <div className="flex justify-center w-full py-8 bg-blueGray-dark lg:py-20">
         <div className="border-4 border-yellow bg-transparent lg:w-[50ch] p-8 w-[95vw] ">
            <h2 className="mb-4 text-xl font-bold text-white">
               ¿Te parece justo contigo mismo que estes trabajando tan duro en
               ti y tus resultados se desvanescan con el tiempo?
            </h2>
            <span className="">
               No tener percepción corporal tus emociones ha hecho que
               <p className="inline mx-1 font-semibold underline">NO</p>
               apliques estrategias de crecimiento personal medibles, escalables
               y te ha llevado obtener resultados temporales y además te llevan
               a estados de más incertidumbre.
            </span>
         </div>
      </div>
   );
}

export default IsItFair;
