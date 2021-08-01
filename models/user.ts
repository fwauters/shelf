export interface User {
  id: string;
  name: string;
  password: string;
  data: {
    created: Date,
    updated: Date,
  };
}
