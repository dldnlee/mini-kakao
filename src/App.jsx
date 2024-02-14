import { createContext, useState } from 'react'
import './App.css'
import Login from './pages/LoginPage/Login'
import MainPage from './pages/MainPage/MainPage'


export const UserContext = createContext(null);

function App() {
  const [user, setUser] = useState('');
  const [auth, setAuth] = useState(false);
  
  if(auth) {
    return (
      <UserContext.Provider value={user}>
        <div className='max-w-[400px] mx-auto bg-white relative h-screen max-h-[700px]'>
          <MainPage />
        </div>
      </UserContext.Provider>
    ) 
  } else {
    return (
      <div className='max-w-[400px] mx-auto bg-white relative h-screen max-h-[700px]'>
        <Login setAuth={setAuth} setUser={setUser}/>
      </div>
    )
  }
}

export default App
