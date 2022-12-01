import { useState } from "react";

/**
 * It returns an array with two items, the first item is the value of the item in local storage, and
 * the second item is a function that saves the item to local storage
 * @param itemName - The name of the item you want to store in localStorage.
 * @param initialValue - The initial value of the item in localStorage.
 * @returns An array with two items. The first item is the item from local storage. The second item is
 * a function that saves the item to local storage.
 */
export const useLocalStorage = (itemName, initialValue) => {
  const localItem = localStorage.getItem(itemName);
  let parsedItem;

  if (!localItem) {
    parsedItem = JSON.stringify(initialValue);
    localStorage.setItem(localItem, parsedItem);
  } else {
    parsedItem = JSON.parse(localItem);
  }

  const [item, setItem] = useState(parsedItem);

  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  };

  return [item, saveItem];
};
