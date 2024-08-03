import { createContext } from "react";

export const AuthContext = createContext({
  userId: '',
  email:'',
  accessToken:'',
  isAuthenticated:'',
  changeAuthState: (authState={})=> null
});
