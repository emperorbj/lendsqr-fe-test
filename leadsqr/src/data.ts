export interface User {
    id: number;
    organization: string;
    username: string;
    email: string;
    phone_number: string;
    date_joined: string;
    user_status: string;
}


const data: User[] = [
  {
    id: 1,
    organization: "leadsqr",
    username: "Leanne Graham",
    email: "Sincere@april.biz",
    phone_number: "08164003938",
    date_joined: "May 15,2020 12:00AM",
    user_status: "blacklisted",
  },
  {
    id: 2,
    organization: "leadway",
    username: "Ervin Howell",
    email: "Shanna@melissa.tv",
    phone_number: "08164003978",
    date_joined: "May 13,2020 12:00AM",
    user_status: "active",
  },
  {
    id: 3,
    organization: "paystack",
    username: "Clementine Bauch",
    email: "Nathan@yesenia.net",
    phone_number: "08174003978",
    date_joined: "May 13,2020 12:00AM",
    user_status: "inactive",
  },
  {
    id: 4,
    organization: "meta",
    username: "Patricia Lebsack",
    email: "Julianne.OConner@kory.org",
    phone_number: "07064003978",
    date_joined: "May 13,2020 12:00AM",
    user_status: "pending",
  },
];
export default data;
