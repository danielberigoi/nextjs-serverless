export type User = {
  id: string;
  name: string;
  email: string;
  company: {
    name: string;
    catchPhrase: string;
  };
};
