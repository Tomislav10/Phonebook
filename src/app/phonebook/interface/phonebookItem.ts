export interface PhonebookItem {
  id: number;
  name: string;
  email: string;
  favorite: boolean;
  phoneNumbers: PhoneNumbers[];
}

interface PhoneNumbers {
  type: string;
  number: string;
}
