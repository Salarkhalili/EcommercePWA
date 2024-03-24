export interface Login {
  username: string;
  password: string;
}

export interface LoginUserData {
  tokens: LoginToken;
  user: LoginUserResponse;
}

export interface LoginToken {
  access: Tokens;
  refresh: Tokens;
}

export interface Tokens {
  token: string;
  expireIn: number;
}

export interface LoginUserResponse {
  username: string;
  project: Array<string>;
  role: number;
}

export interface DecodedTokenObject {
  sub: string;
  aud: string;
  azp: string;
  scope: string;
  iss: string;
  groups: string[];
  exp: number;
  iat: number;
  jti: string;
}
