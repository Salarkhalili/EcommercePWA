import { read } from "../helper/localStorage";

export const serverList = process.env.REACT_APP_API_URL?.split(",");

export const baseUrl = read("base") || serverList![0];
