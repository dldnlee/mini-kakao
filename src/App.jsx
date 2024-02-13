import { useState } from 'react'
import './App.css'
import Login from './pages/LoginPage/Login'
import MainPage from './pages/MainPage/MainPage'



function App() {
  const [auth, setAuth] = useState(false);


  if (auth) {
    return (
      <div className='max-w-[400px] mx-auto bg-white relative h-screen max-h-[700px]'>
        <MainPage />
      </div>
    ) 
  } else {
    return (
      <div className='max-w-[400px] mx-auto bg-white relative h-screen max-h-[700px]'>
        <Login auth={auth} setAuth={setAuth}/>
      </div>
    )
  }
}

export default App
