import { itemType } from "./../old/types";

export const fetchFn = async (
  cursor: number,
  limit: number
): Promise<itemType[]> => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_start=${cursor}&_limit=${limit}`
    );
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

//https://jsonplaceholder.typicode.com/posts?_start=3&_limit=2
