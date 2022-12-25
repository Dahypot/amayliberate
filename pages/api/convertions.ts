import { NextApiRequest, NextApiResponse } from "next";
import makePostRequestToConvertionsAPI from "@pixelEvents/postRequestToConvertionAPI";
import generateBasePayload from "@pixelEvents/basePayload";

const convertions = async (req: NextApiRequest, res: NextApiResponse) => {
   if (req.method !== "POST") {
      res.status(405).send("Method Not Allowed");
   }

   const { reqPayload } = req.body;

   const basePayload = generateBasePayload(req);

   const user_data = {
      ...basePayload.data[0].user_data,
      ...reqPayload.user_data,
   };

   const payload = {
      data: [{ ...basePayload.data[0], ...reqPayload, user_data }],
   };

   try {
      await makePostRequestToConvertionsAPI(payload);
      res.status(200).send("OK");
   } catch (error) {
      res.status(500).json(error);
   }
};

export default convertions;
