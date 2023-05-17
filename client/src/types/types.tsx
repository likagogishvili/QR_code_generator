interface User {
  name: string;
  lname: string;
  email: string;
  position: string;
  phoneNumber: string;
}

interface Users {
  id: number;
  name: string;
  lname: string;
  email: string;
  position: string;
  phoneNumber: string;
}

interface Contact {
  displayName: string;
  name: ContactName[];
  emails: ContactField[];
  phoneNumbers: ContactField[];
  save(): Promise<void>;
}

interface ContactName {
  familyName: string;
  givenName: string;
}

interface ContactField {
  type: string;
  value: string;
  pref?: boolean;
}

export type { User, Users, Contact, ContactName, ContactField };
