import React, { useContext, useState } from "react";

const ReTwitte = React.createContext()

const ReTwitteProvider =({children})=>{

    const [newTwitteInput, setnewTwitteInput] = useState('');

    return (
        <ReTwitte.Provider value={{newTwitteInput,setnewTwitteInput}}>
            {children}
        </ReTwitte.Provider>
        )
}
const useReTwitte =()=>{
   return useContext(ReTwitte)
}
export {ReTwitteProvider,ReTwitte,useReTwitte}