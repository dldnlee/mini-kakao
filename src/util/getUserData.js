import pb from "./pocketbase";


export async function getUserData(userId) {
  const user = await pb.collection('users').getOne(userId);
  return user;
}