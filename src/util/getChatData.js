import PocketBase from 'pocketbase';

export default async function getChatData() {
  const pb = new PocketBase(`${import.meta.env.VITE_PB_URL}`);
  const chatData = await pb.collection('chats').getFullList();
  return chatData;
}

