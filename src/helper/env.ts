import { IS_PRODUCTION } from "./crypto.constants";

const nothing = () => {};

// eslint-disable-next-line
export default (inProduction = nothing, inDevelopment = nothing) =>
	process.env.NODE_ENV === IS_PRODUCTION || process.env.NODE_ENV === "test" ? inProduction() : inDevelopment();
