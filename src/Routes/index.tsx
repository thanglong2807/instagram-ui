import { v4 as uuidv4 } from "uuid";
import Home from "../Pages/Home";
import Messenger from "../Pages/Messenger";
import UserProfile from "../Pages/UserProfile";

export const privateRoute = [
  {
    id: uuidv4(),
    path: "/",
    component: Home,
  },
  {
    id: uuidv4(),
    path: "/messenger",
    component: Messenger,
  },
  {
    id: uuidv4(),
    path: "/user-profile",
    component: UserProfile,
  },
];
