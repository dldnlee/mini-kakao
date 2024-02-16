import search from '@/assets/search.svg';
import profile from '@/assets/fullMy.svg';
import { Link } from 'react-router-dom';
import { getChatRooms } from '../../../util';
import { useEffect, useState } from 'react';
import pb from '@/util/pocketbase';
import { getUserData } from '../../../util/getUserData';

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
  const [chatrooms, setChatrooms] = useState([]);
  const [opponentUsers, setOpponentUsers] = useState({});
  const { model } = JSON.parse(localStorage.getItem('pocketbase_auth'));

  useEffect(() => {
    const fetchData = async () => {
      const updatedChatrooms = await getChatRooms();
      setChatrooms(updatedChatrooms);
      
      const usersData = await Promise.all(
        updatedChatrooms.map(async (item) => {
          if (model.id === item.user1) {
            return await getUserData(item.user2);
          } else if (model.id === item.user2) {
            return await getUserData(item.user1);
          }
        })
      );
      
      const usersMap = {};
      updatedChatrooms.forEach((item, index) => {
        usersMap[item.id] = usersData[index];
      });
      setOpponentUsers(usersMap);
    };

    fetchData();
  }, [model.id]);

  return (
    <>
      {chatrooms.map((item) => (
        <Link key={item.id} to={item.id} className="w-full border-gray-300 flex px-2 py-1 justify-between">
          <div className="flex gap-2">
            <img src={profile} alt="profile" className="w-8" />
            <div className="flex flex-col items-start">
              <p>{opponentUsers[item.id]?.name}</p>
              <p>{opponentUsers[item.id]?.username}</p>
            </div>
          </div>
          <p>time</p>
        </Link>
      ))}
    </>
  );
}


export default function ChatPage() {

  return (
    <div>
      <TopBar />
      <ChatInstance />
    </div>
  )
}
