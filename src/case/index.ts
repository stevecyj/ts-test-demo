import { userAge, fetchUserAge } from "./user";

// 直接輸入
export const add = (a: number, b: number) => a + b;

// 間接輸入
export const doubleUserAge = (): number => userAge() * 2;

export const fetchDoubleUserAge = async (): Promise<number> => {
  const age = await fetchUserAge();
  return age * 2;
};
