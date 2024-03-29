import pb from './pocketbase.js';

export async function validator(username, password) {

  try {
    const authData = await pb.collection('users').authWithPassword(
      username, 
      password
      );
      localStorage.setItem('auth', true);
      return pb.authStore.isValid;
      
  } catch {
    alert("아이디나 비밀번호를 다시 확인 해주세요")
    return false;
  }

}