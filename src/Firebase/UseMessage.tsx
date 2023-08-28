import { Timestamp, addDoc, collection } from "firebase/firestore";
import { Message } from "../Constant/Const";
import { db } from "./config";



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