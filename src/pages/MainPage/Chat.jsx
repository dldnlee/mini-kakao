import search from '../../assets/search.svg';

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

export default function Chat() {
  return (
    <div>
      <TopBar />
    </div>
  )
}