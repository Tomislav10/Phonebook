export interface Contact {
  id: number;
  name: string;
  email: string;
  favorite: boolean;
  contacts: PhoneNumbers[];
  img: string | ArrayBuffer;
}

export interface PhoneNumbers {
  label: string;
  number: string;
}
