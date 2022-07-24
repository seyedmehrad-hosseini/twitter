import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllTweets } from "../api/api_tweet";

const getAllTweetsContext = React.createContext()

const GetAllTweetsContextprovider =({children}) =>{


    const [tweets ,settweets] = useState([])

    const getAllTweets_example =(body)=>{
        console.log(body)
       
            getAllTweets(body, (isOk , dataOrError ) =>{
                if(isOk){
                    settweets(dataOrError)
    
                }else{
                    
                }
            })


    }
    return(
        <getAllTweetsContext.Provider value={{getAllTweets_example,tweets}}>
            {children}
        </getAllTweetsContext.Provider>
    )
}
const useGetAlltwitte =()=>{
    return useContext(getAllTweetsContext)
 }

export {GetAllTweetsContextprovider,useGetAlltwitte}