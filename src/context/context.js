import React, { useContext, useState } from "react";

const ReTwitte = React.createContext()

const ReTwitteProvider =({children})=>{

    const [TextIsReceived, setTextIsReceived] = useState('');
    const sendTextToTwitte=(text)=>{
        setTextIsReceived(text)
    }
    return (
        <ReTwitte.Provider value={{TextIsReceived,setTextIsReceived,sendTextToTwitte}}>
            {children}
        </ReTwitte.Provider>
        )
}
const useReTwitte =()=>{
   return useContext(ReTwitte)
}
export {ReTwitteProvider,ReTwitte,useReTwitte}