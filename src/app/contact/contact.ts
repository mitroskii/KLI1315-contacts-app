export class Contact {
  id: number;
  firstName: string;
  lastName: string;
  city: string;
  address: string;
  postalCode: string;
  email: string;
  gsm: string;

  constructor(id?: number, firstName?: string, lastName?: string, city?: string, address?: string, postalCode?: string,
              email?: string, gsm?: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.city = city;
    this.address = address;
    this.postalCode = postalCode;
    this.email = email;
    this.gsm = gsm;
  }
}
