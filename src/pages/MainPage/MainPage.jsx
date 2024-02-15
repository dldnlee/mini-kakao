import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from '../../components/NavBar';
import FriendsPage from './FriendsPage';
import ChatPage from './ChatPage/ChatPage';
import ShoppingPage from './ShoppingPage';
import MorePage from './MorePage';
import Missing from '../Missing';
import ChatRoom from './ChatPage/ChatRoom';



function MainPage() {


  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<FriendsPage />} />
          <Route path="chat" element={<ChatPage />}/>
          <Route path="shopping" element={<ShoppingPage />} />
          <Route path="more" element={<MorePage />} />
          <Route path="*" element={<Missing />} /> {/*empty page*/}
        </Route> 
        <Route path="chat/:chatroomId" element={<ChatRoom />} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default MainPage;
