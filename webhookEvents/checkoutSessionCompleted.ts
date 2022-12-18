import Stripe from "stripe";
import { getFirebaseSubscriberData } from "@utils/getFirebaseSubscriberData";
import subscribeToGetGiftCard from "@utils/mailerliteSubscribeToGetGiftCard";
import { subscribeToPartOne } from "@utils/mailerliteSubscribeToPartOne";
import generateUniqueGiftCardCode from "@utils/generateUniqueGiftCardCode";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "@utils/firebaseConfig";

interface CheckoutSessionCompleted extends Stripe.Event.Data.Object {
   customer_details: {
      name: string;
      email: string;
   };
   id: string;
}
const checkoutSessionCompletedEvent = async (checkoutSessionObject: any) => {
   const checkoutSession = checkoutSessionObject as CheckoutSessionCompleted;

   const checkoutSessionId = checkoutSession.id;

   let subscriberData = await getFirebaseSubscriberData(checkoutSessionId);

   if (!subscriberData) {
      subscriberData = checkoutSession.customer_details;
   }

   console.log("log", "subscriberData", subscriberData);

   if (subscriberData.getGiftCard) {
      const email = subscriberData.email;

      const code = await generateUniqueGiftCardCode();

      const userRef = doc(db, "users", email);

      await updateDoc(userRef, {
         giftCardCodes: arrayUnion(code),
      });

      await subscribeToGetGiftCard(email, code);
      console.log(`log, ${email} ${code}`);
      return;
   }
   await subscribeToPartOne(subscriberData.email, subscriberData.name);
   return;
};
export default checkoutSessionCompletedEvent;
