import { useState } from "react";
import { FormData, FormError, Message } from "../Constant/Interface";
import { Timestamp } from "firebase/firestore";
import useMessage from "../Firebase/UseMessage";
import { useToast } from "@chakra-ui/react";

const useForm = ():[FormData, (data: FormData) => void, () => Promise<void>, FormError] => {

    const [formData, setFormData] = useState<FormData>({from:"",subject:"",message:""});
    const [formError, setFormError] = useState<FormError>({from:false,subject:false,message:false});
    const [sendMessage] = useMessage();
    const toast = useToast();

    const setFormValues = (data:FormData) => {setFormData(data)};
    const sendForm = async() => {

        const message:Message = {...formData, dateTime: Timestamp.fromDate(new Date())};
        const error = {from:false,subject:false,message:false};

        if(message.from.trim().length === 0)
            error.from = true;

        if(message.subject.trim().length === 0)
            error.subject = true;
        
        if(message.message.trim().length === 0)
            error.message = true; 
        
        setFormError(error);

        if(!error.from && !error.message && !error.subject){
            const result = await sendMessage(message);

            if(result)
            {
                setFormData({from:"",subject:"",message:""});
                toast({
                    title: 'Message sent.',
                    description: "Thank you for sending me a message.",
                    status: 'success',
                    duration: 1500,
                    isClosable: true,
                  })
            }
        }
    }
    return [formData,setFormValues, sendForm, formError];
}

export default useForm;