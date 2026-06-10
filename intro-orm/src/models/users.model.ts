export type UsersCreateRequest = {
  username: string;
  email: string;
  password: string;
  fullName: string;
};

export type UsersUpdateRequest = {
  username: string;
  email: string;
  password: string;
  fullName: string;
  id: string
};
