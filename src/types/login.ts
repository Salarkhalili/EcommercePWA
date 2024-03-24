export interface LoginUser {
  username: string;
  password: string;
}

export interface RefreshToken {
  refreshToken: string;
}

export interface LoginData {
  token: string;
  refreshToken: string;
}

export interface ILoginResponseData {
  access_token: string;
  refresh_token: string;
  scope: string;
  token_type: string;
  expires_in: number;
  stateList: string[];
}
