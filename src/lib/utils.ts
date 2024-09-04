import { getUser } from "@/api/user/getUser";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function isAuthenticated() {
  const { error } = await getUser();
  if (error) {
    return false;
  }
  return true;
}
