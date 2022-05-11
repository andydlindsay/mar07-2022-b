const myUsername: string = 'Alice';

interface IPotentialUser {
  username: string;
  password: string;
}

const login = (user: IPotentialUser): boolean => {
  return false;
};

const myUser = {
  username: 'jstamos',
  password: '1234',
  tvShows: []
};

login(myUser);
