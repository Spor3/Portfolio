import {  addDoc, collection } from "firebase/firestore";
import { db } from "./config";
import { Message } from "../Constant/Interface";



const useMessage = ():[(message: Message) => Promise<boolean>] => {

    const sendMessage = async (message: Message) => {
       try {
        await addDoc(collection(db, "Message"), message);
        return true;
       } catch (error) {
        return false;
       } 
    }

    return [sendMessage];
}

export default useMessage;