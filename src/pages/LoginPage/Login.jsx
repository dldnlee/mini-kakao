import kakaotalk from '../../assets/kakaotalk.png';

export default function Login() {
  return (
    <div className="h-full w-full bg-primary flex flex-col justify-center items-center gap-4">
      <img src={kakaotalk} alt="KakaoTalk Bubble" className='w-44'/>
      <form action="/" className="flex flex-col gap-6 justify-center items-center">
        <div>
          <label htmlFor="username" className="text-s sr-only">Username</label>
          <input type="text" id="username" placeholder="아이디" className="px-3 py-1 w-2/3"/>
          <label htmlFor="password" className="text-s sr-only">Password</label>
          <input type="password" id="password" placeholder="비밀번호" className="border-t-[1px] px-3 py-1 w-2/3"/>
        </div>
        <button className="px-3 py-2 text-white bg-orange-900 w-2/3">로그인</button>
      </form>
    </div>
  )
}