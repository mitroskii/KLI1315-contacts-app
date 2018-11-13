import {Injectable} from '@angular/core';
import {Contact} from '../contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contacts: Contact[];

  constructor() {
    this.contacts = [];
    this.contacts.push(new Contact(1, 'First', 'Contact', 'Lappeenranta', 'first.contact@contacts.com', '+358 111 111 111'));
    this.contacts.push(new Contact(2, 'Second', 'Contact', 'Lappeenranta', 'second.contact@contacts.com', '+358 222 222 222'));
    this.contacts.push(new Contact(3, 'Third', 'Contact', 'Lappeenranta', 'third.contact@contacts.com', '+358 333 333 333'));
    this.contacts.push(new Contact(4, 'Fourth', 'Contact', 'Lappeenranta', 'fourth.contact@contacts.com', '+358 444 444 444'));
    this.contacts.push(new Contact(5, 'Fifth', 'Contact', 'Lappeenranta', 'fifth.contact@contacts.com', '+358 555 555 555'));
    this.contacts.push(new Contact(6, 'Sixth', 'Contact', 'Lappeenranta', 'sixth.contact@contacts.com', '+358 666 666 666'));
    this.contacts.push(new Contact(7, 'Seventh', 'Contact', 'Lappeenranta', 'seventh.contact@contacts.com', '+358 777 777 777'));
    this.contacts.push(new Contact(8, 'Eighth', 'Contact', 'Lappeenranta', 'eighth.contact@contacts.com', '+358 888 888 888'));
  }

  getContacts(): Contact[] {
    return this.contacts;
  }

  removeContact(contact: Contact) {

    this.contacts.splice(this.contacts.indexOf(contact), 1);

  }
}


