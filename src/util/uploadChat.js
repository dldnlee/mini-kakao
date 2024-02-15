import pb from './pocketbase.js';

// export default function uploadChat() {
//   const pb = new PocketBase('http:')
// }

export async function uploadChat(content, created_by, sent_to) {

  const data = {
      "content": `${content}`,
      "created_by": `${created_by}`,
      "sent_to": `${sent_to}`
  };

  const record = await pb.collection('chats').create(data);
}