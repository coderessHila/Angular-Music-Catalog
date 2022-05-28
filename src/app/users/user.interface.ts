export interface User {
  id: string,
  username: string,
  password: string,
  user_type: "guest" | "registered" | "admin"
}
