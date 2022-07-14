export interface IUsers {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAddress;
  phone: string;
  website: string;
  company: ICompany;
}

interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}

interface ICompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface userRowProps {
  name: string;
  email: string;
  phone: string;
}

export interface IState {
  isLoading: boolean;
  data: Array<IUsers> | null;
  error: unknown | null;
}
