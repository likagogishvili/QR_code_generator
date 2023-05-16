interface User {
  name: string;
  lname: string;
  email:string;
  position: string;
  phoneNumber: string;
}

interface Users {
  id: number;
  name: string;
  lname: string;
  email:string;
  position: string;
  phoneNumber: string;
}

export type { User, Users};
