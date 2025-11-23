// lib/utils.ts
import { clsx } from "clsx";

// cn হল className combine করার helper
export const cn = (...inputs: any[]) => {
  return clsx(inputs);
};
