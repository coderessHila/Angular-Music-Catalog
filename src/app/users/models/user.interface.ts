import {UserType} from "./userType.enum";

export interface User {
  id: string,
  username: string,
  password: string,
  // user_type: "guest" | "registered" | "admin" // use enum UserType,
  user_type: UserType.guest | UserType.registered | UserType.admin
  name: string
}
