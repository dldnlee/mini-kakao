import { useState } from 'react';
import kakaotalk from '../../assets/kakaotalk.png';
import validator from '../../util/validator';
import PocketBase from 'pocketbase';



export default function Login({setUser}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  function handleUsername(e) {
    setUsername(e.target.value);
  }
  
  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit() {
    validator(username, password);
    const pb = new PocketBase(`${import.meta.env.VITE_PB_URL}`);
    if(validator(username, password)) {
      localStorage.setItem("auth", true);
      setUser(pb.authStore.model.id);
    } else {
      return;
    }
  }

  return (
    <div className="h-full w-full bg-primary flex flex-col justify-center items-center gap-4">
      <img src={kakaotalk} alt="KakaoTalk Bubble" className='w-44'/>
      <form action="/" className="flex flex-col gap-6 justify-center items-center" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username" className="text-s sr-only">Username</label>
          <input type="text" id="username" placeholder="아이디" className="px-3 py-1 w-2/3" onChange={handleUsername}/>
          <label htmlFor="password" className="text-s sr-only">Password</label>
          <input type="password" id="password" placeholder="비밀번호" className="border-t-[1px] px-3 py-1 w-2/3" onChange={handlePassword}/>
        </div>
        <button className="px-3 py-2 text-white bg-orange-900 w-2/3">로그인</button>
      </form>
    </div>
  )
}