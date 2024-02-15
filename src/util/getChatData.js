import pb from './pocketbase.js';

export async function getChatData() {
  const chatData = await pb.collection('chats').getFullList();
  
  return chatData;
}

