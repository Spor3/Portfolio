import { useMediaQuery } from "@chakra-ui/react";
import { createContext, useContext } from "react";
import { MediaQueryContextInterface } from "./Constant/Interface";

const MediaQueryContext = createContext<MediaQueryContextInterface>({
    isLargerThan500: false,
    isLargerThan630: false,
    isLargerThan680: false,
    isLargerThan860: false,
    isLargerThan1200: false 
});

export const MediaQueryProvider = ({children}:any) => {

    const [isLargerThan500] = useMediaQuery('(min-width: 500px)');
    const [isLargerThan630] = useMediaQuery('(min-width: 630px)');
    const [isLargerThan680] = useMediaQuery('(min-width: 680px)');
    const [isLargerThan860] = useMediaQuery('(min-width: 860px)');
    const [isLargerThan1200] = useMediaQuery('(min-width: 1200px)');

    return(
        <MediaQueryContext.Provider value={{isLargerThan500, isLargerThan630, isLargerThan680, isLargerThan860, isLargerThan1200 }}>
            {children}
        </MediaQueryContext.Provider>
    )
}



export const useMQuery = () => useContext(MediaQueryContext);