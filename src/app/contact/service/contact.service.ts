import {Injectable} from '@angular/core';
import {Contact} from '../contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contacts: Contact[];

  constructor() {
    this.contacts = [];
    this.contacts.push(new Contact(1, 'First', 'Contact', 'Lappeenranta', 'Laserkatu 6', 'first.contact@contacts.com', '+358 111 111 111'));
    this.contacts.push(new Contact(2, 'Second', 'Contact', 'Lappeenranta', 'Laserkatu 6', 'second.contact@contacts.com', '+358 222 222 222'));
    this.contacts.push(new Contact(3, 'Third', 'Contact', 'Lappeenranta', 'Laserkatu 6', 'third.contact@contacts.com', '+358 333 333 333'));
    this.contacts.push(new Contact(4, 'Fourth', 'Contact', 'Lappeenranta', 'Laserkatu 6', 'fourth.contact@contacts.com', '+358 444 444 444'));
    this.contacts.push(new Contact(5, 'Fifth', 'Contact', 'Lappeenranta', 'Laserkatu 6', 'fifth.contact@contacts.com', '+358 555 555 555'));
    this.contacts.push(new Contact(6, 'Sixth', 'Contact', 'Lappeenranta', 'Laserkatu 6', 'sixth.contact@contacts.com', '+358 666 666 666'));
    this.contacts.push(new Contact(7, 'Seventh', 'Contact', 'Lappeenranta', 'Laserkatu 6', 'seventh.contact@contacts.com', '+358 777 777 777'));
    this.contacts.push(new Contact(8, 'Eighth', 'Contact', 'Lappeenranta', 'Laserkatu 6', 'eighth.contact@contacts.com', '+358 888 888 888'));
  }

  getContacts(): Contact[] {
    return this.contacts;
  }

  removeContact(contact: Contact) {
    this.contacts.splice(this.contacts.indexOf(contact), 1);
  }

  addContact(contact: Contact) {
   const maxId = this.contacts[this.contacts.length - 1].id;
    contact.id = maxId + 1;
    this.contacts.push(contact);
  }
}


