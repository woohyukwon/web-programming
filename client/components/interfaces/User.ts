export interface User {
  _id: string;
  name: {
     _id: string,
     firstName: string;
     lastName: string;
  }
  username:string;
  email:string;
  __v: number;
}
