import { Button, ButtonGroup, FormControl, FormErrorMessage, FormLabel, Input, Textarea, VStack } from "@chakra-ui/react";
import { SiMinutemailer } from "react-icons/si";
import useForm from "../Hook/useForm";

const Form = () => {

    const [formData,setFormValues, sendForm, formError] = useForm();

    const handleSubmit = async (e:any) => {
        e.stopPropagation();
        e.preventDefault();

        sendForm();
    }

    return(
        <form onSubmit={handleSubmit}>
            <VStack spacing={5}>
            <FormControl isInvalid={formError.from}>
                <FormLabel color="secondary">From</FormLabel>
                <Input errorBorderColor="#805AD5" _focusVisible={{borderColor:"violet", boxShadow:"0 0 0 1px #9F7AEA"}} type='text' bg="primary" value={formData.from} onChange={(e) => setFormValues({...formData, from:e.currentTarget.value})} />
                <FormErrorMessage color="violet">From is required.</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={formError.subject}>
                <FormLabel color="secondary">Subject</FormLabel>
                <Input errorBorderColor="#805AD5" _focusVisible={{borderColor:"violet", boxShadow:"0 0 0 1px #9F7AEA"}} type='text' bg="primary" value={formData.subject} onChange={(e) => setFormValues({...formData, subject:e.currentTarget.value})}/>
                <FormErrorMessage color="violet">Subject is required.</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={formError.message}>
            <Textarea errorBorderColor="#805AD5" _focusVisible={{borderColor:"violet", boxShadow:"0 0 0 1px #9F7AEA"}} resize="none" height="150px" bg="primary" placeholder="Write message..." value={formData.message} onChange={(e) => setFormValues({...formData, message:e.currentTarget.value})} />
            <FormErrorMessage color="violet">Message is required.</FormErrorMessage>
            </FormControl>
            <ButtonGroup>
            <Button bg="violet" color="primary" _hover={{opacity:"0.8"}} type="submit" rightIcon={<SiMinutemailer />}>Send</Button>
            </ButtonGroup>
            </VStack>
        </form>
    );
}


export default Form;