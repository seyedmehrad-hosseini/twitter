import React , {useState} from 'react';
import { FaHeart,FaRetweet} from "react-icons/fa";
import { likeTwittes } from '../../../../../api/api_likeTwitte';
import { useReTwitte } from '../../../../../context/retwitteContext';
import { useSetProfile } from '../../../../../context/setProfileContext';




const TwittesList = ({user , text , likes , image , _id}) => {
    const localUsername =  localStorage.getItem("username")

    const [postLikes, setPostLikes] = useState(false);
    const {setnewTwitteInput} = useReTwitte()
    const {ImagePath} = useSetProfile()


    const renderText =(text) =>{
        const a = text.replaceAll( /#\S+/g , `<a href=$& style="color : #5ea9dd">$&</a>`)

        return {__html :a}


    }
    const getImage =()=>{
        if(localUsername == user.username && ImagePath){
            return ImagePath
        }
        else if(user.image) {
           return user.image
        }
        else {
            return'/img/publicProfile.png'
        }
    }
    return (
        <div className='new-twitte'>
                <img className='newTwittesProfile' src={getImage()} />
                <div className='name-username-twitte'>
                    <span className='name'>{user.name}</span>
                    <span className='username'>{user.username}</span>
                    <span className='twitte' dangerouslySetInnerHTML={renderText(text)}>
            
                    </span>
                    {image && 
                            <div className='twitteImg'>
                                <img src={image} />
                            </div>}
                    <div className='reTwitte-likes'>
                        <span className='like-number'>{postLikes ? parseInt(likes)+1  : parseInt(likes) }</span>
                        <span className='like-icon' style={{color : postLikes ?  "red" :"gray" }}
                            onClick={()=>
                                    {
                                        setPostLikes(!postLikes)
                                        likeTwittes(_id , (isOk, dataORerror)=>{
                                            if(isOk){
                                                alert('post liked')
            
                                            }else{
                                                alert('post dont liked')
                                            }
                                        })
                                    }
                                }>
                            <FaHeart  />
                        </span>
                        <span className='reTwitte' onClick={()=> setnewTwitteInput(text)}>
                            <FaRetweet />
                        </span>

                    </div>
                </div>
            
        </div>
    );
};
export default TwittesList;