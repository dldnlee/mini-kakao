import pb from "./pocketbase";

export async function getChatRooms() {
  const chatrooms = await pb.collection('chatrooms').getFullList();
  return chatrooms;
}