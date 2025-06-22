export interface Auth{
  username: string;
  password: string;
}

export function ensureUsername(username: string){
  if(username.length < 4) throw new Error("Username is invalid")
}

export function ensurePassword(password: string){
  if(password.length < 8) throw new Error("Password is invalid")
}