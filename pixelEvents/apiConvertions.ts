const apiConvertions = async (reqPayload: any) => {
   console.log(process.env.NEXT_PUBLIC_MY_DOMAIN);

   const response = await fetch(
      `${process.env.NEXT_PUBLIC_MY_DOMAIN}/api/convertions`,
      {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({
            reqPayload,
         }),
      }
   );

   return await response.json();
};
export default apiConvertions;
