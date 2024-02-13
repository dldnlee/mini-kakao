import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from '../../components/NavBar';
import Friends from './Friends';
import Chat from './Chat';
import Shopping from './Shopping';
import More from './More';
import Missing from '../Missing';



function MainPage() {

  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Friends />} />
          <Route path="chat" element={<Chat />} />
          <Route path="shopping" element={<Shopping />} />
          <Route path="more" element={<More />} />
          <Route path="*" element={<Missing />} /> {/*empty page*/}
        </Route> 
      </Routes>
    </BrowserRouter>
    
  )
}

export default MainPage;
