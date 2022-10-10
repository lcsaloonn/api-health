import { UserResponse } from 'src/Domaine/Enums/response.enum';

export type UserResponseType = {
  response: UserResponse;
  msg: string;
};

export type LoginResponse = {
  token?: string;
  isSuccess: boolean;
};
