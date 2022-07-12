import ReactDOM from 'react-dom/client';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import App from './component/app';
import LeftSidebar from './component/layout/leftsidebar/leftsidebar';
import MainBar from './component/layout/mainbar/mainbar';
import HomePage from './component/layout/mainbar/pages/home/homepage';
import LoginRegister from './component/layout/mainbar/pages/loginRegister/LoginRegister';
import MostHashtags from './component/layout/mainbar/pages/mostHashtag/MostHashtags';
import TwittesByUsers from './component/layout/mainbar/pages/twittesByUsers/TwittesByUsers';
import RightSidebar from './component/layout/rightsidebar/rightsidebar';
// import App from './component/app';
import { IndexRoutes } from './component/routes/routs';
import "./css/main.min.css"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
           <Routes>
            <Route path="login" element={<LoginRegister/>}>
            </Route>
            <Route path='/' element={<App/>}>
               <Route path='/' element={<MainBar/>}>
                  <Route path='/' element={<HomePage />} />
                  <Route path='/home' element={<HomePage />} />

                  <Route path='most-hashtags'>
                     <Route path=":hashtagName" element={<MostHashtags />} />    
                  </Route>
                  <Route path='twittes-by-users' element={<TwittesByUsers />} />
                  <Route path='twittes-by-users'>
                     <Route path=":username" element={<TwittesByUsers />} />    
                  </Route>
               </Route>
            </Route>
       </Routes>
 </BrowserRouter>
    
  
  
);


