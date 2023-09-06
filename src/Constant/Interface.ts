import { Timestamp } from "firebase/firestore";


export interface FormData {
    from:string;
    subject:string;
    message:string;
}
export interface FormError {
    from: boolean;
    subject: boolean;
    message: boolean;
}

export interface Message {
    from:string;
    subject:string;
    message:string;
    dateTime:Timestamp;
}
export interface MediaQueryContextInterface {
    isLargerThan500: boolean;
    isLargerThan630:boolean;
    isLargerThan680:boolean;
    isLargerThan860:boolean;
    isLargerThan1200:boolean;
}
// Props Components
export interface LoaderProps {
    size: "big" | "small"
 }

 export interface ContainerProps {
    children: JSX.Element,
    id: string
}

export interface CardProps {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    schoolProject: boolean;
    link: string;
    externalLink: null | string;
    index:number;
}