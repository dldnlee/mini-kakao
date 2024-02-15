import pb from "./pocketbase";


export async function getUserData(userId) {
  const user = await pb.collection('user').getOne(userId);
  return user;
}