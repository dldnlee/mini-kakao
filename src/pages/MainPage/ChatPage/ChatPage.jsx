import search from '@/assets/search.svg';
import profile from '@/assets/fullMy.svg';
import { Link } from 'react-router-dom';



function TopBar() {
  return (
    <div className='w-full flex justify-between px-4 py-2 sticky top-0'>
      <h1 className='text-lg font-semibold'>Chats</h1>
      <ul className='flex gap-2'>
        <li><button><img src={search} alt="Search" /></button></li>
        <li><button><img src={search} alt="Search" /></button></li>
        <li><button><img src={search} alt="Search" /></button></li>
        <li><button><img src={search} alt="Search" /></button></li>
      </ul>
    </div>
  )
}

function ChatInstance() {
  return (
    <Link to="chat_instance" className='w-full border-gray-300 flex px-2 py-1 justify-between'>
      <div className='flex gap-2'>
        <img src={profile} alt="profile" className='w-8' />
        <div className='flex flex-col items-start'>
          <p>name</p>
          <p>content</p>
        </div>
      </div>
      <p>time</p>
    </Link>
  )
}

export default function ChatPage() {

  return (
    <div>
      <TopBar />
      <ChatInstance />
    </div>
  )
}
