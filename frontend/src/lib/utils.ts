import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import axios from "axios";

const backendBaseUrl = import.meta.env.VITE_BACKEND_BASE_URL;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const registerUser = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const newUser = {
    user: {
      first_name: formData.get("first_name"),
      middle_name: formData.get("middle_name"),
      last_name: formData.get("last_name"),
      password: formData.get("password"),
      email: formData.get("email"),
      address: formData.get("address"),
      mobile_number: formData.get("mobile_number"),
    },
  };
  try {
    const res = await axios.post(`${backendBaseUrl}/users`, newUser);
    return res;
  } catch (error) {
    if (error) {
      return error;
    } else {
      return error;
    }
  }
};

export const indexAllPizza = async () => {
  try {
    const res = await axios.get(`${backendBaseUrl}/api/pizzas`);
    return res.data;
  } catch (error) {
    if (error) {
      return error;
    } else {
      return error;
    }
  }
}