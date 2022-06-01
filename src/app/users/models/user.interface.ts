import {UserType} from "./user.enum";

export interface User {
  id: string,
  username: string,
  password: string,
  user_type: "guest" | "registered" | "admin" // use enum UserType,
  name: string
}
