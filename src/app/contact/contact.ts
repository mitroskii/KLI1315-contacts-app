export class Contact {
  id: number;
  firstName: string;
  lastName: string;
  city: string;
  email: string;
  gsm: string;

  constructor(id?: number, firstName?: string, lastName?: string, city?: string, email?: string, gsm?: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.city = city;
    this.email = email;
    this.gsm = gsm;
  }
}
