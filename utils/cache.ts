'use client';
export const getLocalStorageItem = (key: string) => {
  return typeof window !== 'undefined' ? localStorage.getItem(key) : null;
};

export const setLocalStorageItem = (key: string, value: string) => {
  // if (typeof window !== 'undefined') {
  //   localStorage.setItem(key, value);
  // }
  return typeof window !== 'undefined' ? localStorage.setItem(key, value) : null;
};