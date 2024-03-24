import { read } from "../helper/localStorage";

export const getRetryExpireToken = (): number => {
  const time = new Date().getTime();
  const expire = +read("expire");

  if (expire < time) {
    return 2;
  }

  return 0;
};
