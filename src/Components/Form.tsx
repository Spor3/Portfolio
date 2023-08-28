import { Button, ButtonGroup, FormControl, FormErrorMessage, FormLabel, Input, Textarea, VStack, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { SiMinutemailer } from "react-icons/si";
import useMessage from "../Firebase/UseMessage";
import { Message } from "../Constant/Const";
import { Timestamp } from "firebase/firestore";

interface FormData {
    from:string;
    subject:string;
    message:string;
}

const Form = () => {

    const [formData, setFormData] = useState<FormData>({from:"",subject:"",message:""});
    const [formError, setFormError] = useState({from:false,subject:false,message:false});
    const toast = useToast();
    const [sendMessage] = useMessage();

    const handleSubmit = async (e:any) => {
        e.stopPropagation();
        e.preventDefault();

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

    return(
        <form onSubmit={handleSubmit}>
            <VStack spacing={5}>
            <FormControl isInvalid={formError.from}>
                <FormLabel color="secondary">From</FormLabel>
                <Input _focusVisible={{borderColor:"violet", boxShadow:"0 0 0 1px #9F7AEA"}} type='text' bg="primary" value={formData.from} onChange={(e) => setFormData({from:e.currentTarget.value, subject:formData.subject, message:formData.message})} />
                <FormErrorMessage>From is required.</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={formError.subject}>
                <FormLabel color="secondary">Subject</FormLabel>
                <Input _focusVisible={{borderColor:"violet", boxShadow:"0 0 0 1px #9F7AEA"}} type='text' bg="primary" value={formData.subject} onChange={(e) => setFormData({from:formData.from, subject:e.currentTarget.value, message:formData.message})}/>
                <FormErrorMessage>Subject is required.</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={formError.message}>
            <Textarea _focusVisible={{borderColor:"violet", boxShadow:"0 0 0 1px #9F7AEA"}} resize="none" height="150px" bg="primary" placeholder="Write message..." value={formData.message} onChange={(e) => setFormData({from:formData.from, subject:formData.subject, message:e.currentTarget.value})} />
            <FormErrorMessage>Message is required.</FormErrorMessage>
            </FormControl>
            <ButtonGroup>
            <Button bg="violet" color="primary" _hover={{opacity:"0.8"}} type="submit" rightIcon={<SiMinutemailer />}>Send</Button>
            </ButtonGroup>
            </VStack>
        </form>
    );
}


export default Form;