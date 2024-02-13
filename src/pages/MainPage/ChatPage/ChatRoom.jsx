// import getChatData from "../../../util/getChatData"
import arrow from '../../../assets/leftArrow.svg';
import hamburger from '../../../assets/hamburger.svg';
import { useNavigate } from 'react-router-dom';
import getChatData from '../../../util/getChatData';
import { UserContext } from '../../../App';
import { useContext, useState } from 'react';

function TopBar() {
  const navigate = useNavigate();

  return (
    <div className="w-full flex justify-between px-4 py-4 sticky top-0 bg-secondary border-b-[1px] border-b-gray-200">
      <button onClick={() => {navigate(-1)}}><img src={arrow} alt="" /></button>
      <h1 className='font-bold'>이은원</h1>
      <button><img src={hamburger} alt="" /></button>
    </div>
  )
}

function ChatInput() {
  return (
    <form className='w-full h-12 flex px-2 py-2 bg-white justify-center gap-4 absolute bottom-0'>
      <label htmlFor="message_input" className='sr-only'>Message Input</label>
      <input type="text" id="message_input" className='w-[80%] bg-gray-100 rounded-md p-2'/>
      <button className='w-12 bg-primary'>send</button>
    </form>
  )
}

function MyMessage() {
    return (
      <>
        <p className='bg-primary flex text-right'>Hello</p>
      </>
    )
}

function OppMessage() {
  return (
    <>
      <p className='bg-gray-400 self-start flex w-10 float-left'>Goodbye</p>
    </>
  )
}

export default function ChatRoom() {
  const [messages, setMessages] = useState([]);


  return (
    <div className="h-full w-full bg-secondary">
      <TopBar />
      <MyMessage />
      <OppMessage />
      <ChatInput />
    </div>
  )
}