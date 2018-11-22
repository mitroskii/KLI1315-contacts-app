import {Injectable} from '@angular/core';
import {Contact} from '../contact';

@Injectable({
  providedIn: 'root'
})
export class ContactLocalStorageService {

  localStorageKey = 'contacts-app';
  contacts: Contact [];

  constructor() {
    if (!localStorage.getItem(this.localStorageKey)) {
      localStorage.setItem(this.localStorageKey, JSON.stringify([]));
    }
    const storageElement = localStorage.getItem(this.localStorageKey);
    this.contacts = JSON.parse(storageElement);
  }

  getContacts(): Contact[] {
    return this.contacts;
  }

  removeContact(contact: Contact) {
    this.contacts.splice(this.contacts.indexOf(contact), 1);
    localStorage.removeItem(this.localStorageKey);
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.contacts));
  }

  addContact(contact: Contact) {
    let lastId = 1;
    if (this.contacts.length > 0) {
      lastId = this.contacts[this.contacts.length - 1].id;
      lastId = lastId + 1;
    }
    contact.id = lastId;
    this.contacts.push(contact);
    localStorage.removeItem(this.localStorageKey);
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.contacts));
  }

  getContactById(id: string): Contact {
    for (const contact of this.contacts) {
      if (contact.id === Number(id)) {
        return contact;
      }
    }
  }
}


