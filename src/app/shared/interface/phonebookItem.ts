export interface PhonebookItem {
  id: number;
  name: string;
  email: string;
  favorite: boolean;
  contacts: PhoneNumbers[];
  img: string;
}

export interface PhoneNumbers {
  label: string;
  number: string;
}
