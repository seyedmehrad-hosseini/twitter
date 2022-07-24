import ReactDOM from 'react-dom/client';
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import App from './component/app';
import LeftSidebar from './component/layout/leftsidebar/leftsidebar';
import MainBar from './component/layout/mainbar/mainbar';
import HomePage from './component/layout/mainbar/pages/home/homepage';
import Login from './component/layout/mainbar/pages/loginRegister/login';
import LoginRegister from './component/layout/mainbar/pages/loginRegister/LoginRegister';
import Register from './component/layout/mainbar/pages/loginRegister/Register';
import MostHashtags from './component/layout/mainbar/pages/mostHashtag/MostHashtags';
import TwittesByUsers from './component/layout/mainbar/pages/twittesByUsers/TwittesByUsers';
import { ReTwitteProvider } from './context/retwitteContext';
import { SetProfileProvider } from './context/setProfileContext';

import "./css/main.min.css"

const isLogin =!!localStorage.getItem('x-auth-token')
// const loginRegisterRouter = () => {
//    if(isLogin)
//    return (
//       <Route path='login' to={<Navigate path="/"/>}>

//       </Route>
         
     
//    );
// };
const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(isLogin)
root.render(<>
   <SetProfileProvider>
      <ReTwitteProvider>
         <BrowserRouter>
                  <Routes>

                           <Route path='/loginRegister' element={isLogin ?<Navigate to="/"/> :<LoginRegister/>}>
                              <Route path='/loginRegister' element={isLogin ?<Navigate to="/"/> :<Navigate to="login"/>} />
                              <Route path='login' element={isLogin ?<Navigate to="/"/> :<Login />} />
                              <Route path='register' element={isLogin ?<Navigate to="/"/> :<Register />} />
                           </Route>              

                           <Route path='/' element={!isLogin ?<Navigate to="/loginRegister"/>:<App/>}>
                              <Route path='/' element={!isLogin ?<Navigate to="/loginRegister"/>:<MainBar/>}>
                                 <Route path='/' element={!isLogin ?<Navigate to="/loginRegister"/>:<HomePage />} />
                                 <Route path='/home' element={!isLogin ?<Navigate to="/loginRegister"/>:<HomePage />} />

                                 <Route path='most-hashtags'>
                                    <Route path=":hashtagName" element={!isLogin ?<Navigate to="/loginRegister"/>:<MostHashtags />} />    
                                 </Route>
                                 <Route path='twittes-by-users' element={!isLogin ?<Navigate to="/loginRegister"/>:<TwittesByUsers />} />
                                 <Route path='twittes-by-users'>
                                    <Route path=":username" element={!isLogin ?<Navigate to="/loginRegister"/>:<TwittesByUsers />} />    
                                 </Route>
                              </Route>
                           </Route>
                        
               </Routes>
         </BrowserRouter>
      </ReTwitteProvider>
   </SetProfileProvider>
 </>
    
  
  
);


