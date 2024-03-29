import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import axios from "axios";

const backendBaseUrl = import.meta.env.VITE_BACKEND_BASE_URL;
const token = document.cookie.split("token=")[1];
axios.defaults.headers.common["Authorization"] = token;


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

export const fetchCartId = async () => {
  try {
    const res = await axios.get(`${backendBaseUrl}/api/current_user_order_id`);
    return res.data;
  } catch (error) {
    if (error) {
      return error;
    } else {
      return error;
    }
  }
}

export const addPizza = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const newPizzas = {
    pizzas: [
      {
        name: formData.get("name"),
        price: formData.get("priceS"),
        size: "S",
        image: formData.get("image"),
        description: formData.get("description"),
      },
      {
        name: formData.get("name"),
        price: formData.get("priceM"),
        size: "M",
        image: formData.get("image"),
        description: formData.get("description"),
      },
      {
        name: formData.get("name"),
        price: formData.get("priceL"),
        size: "L",
        image: formData.get("image"),
        description: formData.get("description"),
      },
      {
        name: formData.get("name"),
        price: formData.get("priceXL"),
        size: "XL",
        image: formData.get("image"),
        description: formData.get("description"),
      },
    ],
  };
  try {
    const res = await axios.post(`${backendBaseUrl}/api/pizzas`, newPizzas);
    return res;
  } catch (error) {
    if (error) {
      return error;
    } else {
      return error;
    }
  }
};

export const uploadDataPizza = async (pizza: FormData) => {
  try {
    const res = await axios.post(`${backendBaseUrl}/api/pizzas`, pizza, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return res;
  } catch (error) {
    console.error('Error:', error);
    return error;
  }
};

export const setAvailabilityTrue = async (id: number) => {
  try {
    const res = await axios.patch(`${backendBaseUrl}/api/pizzas/${id}/update_true`);
    return res;
  } catch (error) {
    if (error) {
      return error;
    } else {
      return error;
    }
  }
};

export const setAvailabilityFalse = async (id: number) => {
  try {
    const res = await axios.patch(`${backendBaseUrl}/api/pizzas/${id}/update_false`);
    return res;
  } catch (error) {
    if (error) {
      return error;
    } else {
      return error;
    }
  }
};


export const addToCart = async (pizzaId: number) => {
  try {
    const res = await axios.post(`${backendBaseUrl}/api/add_to_cart`, {pizza_id: pizzaId});
    return res;
  } catch (error) {
    console.error('Error:', error);
    return error;
  }
};

export const getOrder = async (orderId: string) => {
  try {
    const res = await axios.get(`${backendBaseUrl}/api/cart/${orderId}`);
    return res.data;
  } catch (error) {
    console.error('Error:', error);
    return error;
  }
};



