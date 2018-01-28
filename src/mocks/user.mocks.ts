import { User } from "../models/user.interface";

const userList: User[] = [
  {
    name: "PaulHalliday",
    company: "PWH",
    location: "Durham, UK",
    bio: "I make videos on my favourite technologies. Go Angular!",
    avatar_url: "http://i.imgur.com/jav62p6.jpg",
    email: "paul@paul.com"
  },
  {
    name: "JohnDeo",
    company: "Deo and Co.",
    location: "London, UK",
    bio: "I Love Ionic!",
    avatar_url: "http://i.imgur.com/TzWcihb.jpg",
    email: "john@deo.com"
  }
];

export const USER_LIST = userList;
