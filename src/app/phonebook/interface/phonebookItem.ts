export interface PhonebookItem {
  id: number;
  name: string;
  email: string;
  favorite: boolean;
  phoneNumbers: PhoneNumbers[];
  img: string;
}

interface PhoneNumbers {
  type: string;
  number: string;
}
