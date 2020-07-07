export interface PhonebookItem {
  id: number;
  name: string;
  email: string;
  favorite: boolean;
  phoneNumbers: PhoneNumbers[];
  img: string;
}

export interface PhoneNumbers {
  type: string;
  number: string;
}
