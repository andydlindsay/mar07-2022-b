// type User = {
//   email: string;
//   password: string;
// }

interface IUser {
  email: string;
  password: string;
}

interface UsersWithAges extends IUser {
  age: number;
}

const user: IUser  = {
  email: 'jstamos@gmail.com',
  password: '1234'
};

const users: IUser[] = [];

users.push(user);
