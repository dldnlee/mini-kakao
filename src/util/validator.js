import PocketBase from 'pocketbase';


export default async function validator(username, password) {
  const pb = new PocketBase(`${import.meta.env.VITE_PB_URL}`)

  try {
    const authData = await pb.collection('users').authWithPassword(
      username, 
      password
      );
      console.log(pb.authStore.model.name);
      return pb.authStore.isValid;
      
  } catch {
    alert("아이디나 비밀번호를 다시 확인 해주세요")
    return false;
  }

}