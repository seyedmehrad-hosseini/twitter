import React, { useContext, useState } from "react"

const SetProfile = React.createContext()


const SetProfileProvider = ({children}) =>{

    const [ImageFile, setImageFile] = useState('');
    const [ImagePath, setImagePath] = useState();

    return (
        <SetProfile.Provider value={{ImageFile,setImageFile,ImagePath,setImagePath}}>
            {children}
        </SetProfile.Provider>
    )
}
const useSetProfile =()=>{
    return useContext(SetProfile)
 }

export {SetProfileProvider,useSetProfile}