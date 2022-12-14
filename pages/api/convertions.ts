import { NextApiRequest, NextApiResponse } from "next";
import makePostRequestToConvertionsAPI from "@pixelEvents/postRequestToConvertionAPI";
import generateBasePayload from "@pixelEvents/basePayload";

const convertions = async (req: NextApiRequest, res: NextApiResponse) => {
   if (req.method !== "POST") {
      res.status(405).send("Method Not Allowed");
      return;
   }

   const { reqPayload } = req.body;

   if (!reqPayload) {
      res.status(500).send("Event Payload undefined");
      return;
   }
   if (reqPayload.event_name !== "PageView") {
      console.log(`log convertionsapi eventName ${reqPayload.event_name}`);
   }

   const basePayload = generateBasePayload(req);

   const user_data = {
      ...(basePayload.data[0].user_data || {}),
      ...(reqPayload.user_data || {}),
   };

   const payload = {
      data: [{ ...basePayload.data[0], ...reqPayload, user_data }],
      // test_event_code: "",
   };

   if (reqPayload?.event_name !== "PageView") {
      console.log(`log user_data ${user_data}`);
      console.log(`log payload ${payload.data[0]}`);
   }

   try {
      const response = await makePostRequestToConvertionsAPI(payload);

      res.status(200).json(response);
   } catch (error) {
      console.log(error);

      res.status(500).json(error);
   }
};

export default convertions;
