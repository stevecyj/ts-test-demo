const user = {
  age: 1,
};

export const userAge = () => {
  // from api
  // return user.age;
  // .env
  return 18;
};

// 這邊類似呼叫 api
export const fetchUserAge = (): Promise<number> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(18);
    }, 1000);
  });
};
