import type { Pagination } from "../types/configuration";

export const calculateRow = (pagination: Pagination, index: number) => {
  const { page, limit } = pagination;
  return (Number(page) - 1) * Number(limit) + index + 1;
};
