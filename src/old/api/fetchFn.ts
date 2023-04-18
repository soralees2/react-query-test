import { itemType } from "../types";

export const fetchFn = async (): Promise<itemType[]> => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (response.ok) {
      const data = await response.json();
      return data && data.length > 0
        ? data
        : Promise.reject(new Error("No data"));
    } else {
      return Promise.reject(new Error("Reject"));
    }
  } catch {
    console.log("error");
    return Promise.reject(new Error("Server Error"));
  }
};
