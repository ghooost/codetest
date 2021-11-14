import { User } from '../datatypes/user';

export type apiFetchInfoResponce = {
  body: {
      User: User;
  };
};

export const apiFetchInfo = async (): Promise<apiFetchInfoResponce> => {
  const responce = await fetch('/info.json');
  return responce.json();
};
