import { Outlet, Link } from 'react-router-dom';
import home from '../assets/home.svg';
import chat from '../assets/chat.svg';
import map from '../assets/map.svg';
import people from '../assets/my.svg';

export default function NavBar() {
  return (
    <>
      <nav className='absolute bottom-0 flex flex-row list-none items-center justify-center gap-16 bg-gray-100 w-full pb-10 pt-2'>
        <li>
          <Link to="/" className='flex flex-col items-center'>
            <img src={home} alt="" />
            <p className='text-xs'>Friends</p>
          </Link>
        </li>
        <li>
          <Link to="chat">
            <img src={chat} alt="" />
            <p className='text-xs'>Chat</p>
          </Link>
        </li>
        <li>
          <Link to="shopping">
            <img src={map} alt="" />
            <p className='text-xs'>Shop</p>
          </Link>
        </li>
        <li>
          <Link to="more">
            <img src={people} alt="" />
            <p className='text-xs'>More</p>
          </Link>
        </li>
      </nav>

      <Outlet />
    </>
    
  )
}