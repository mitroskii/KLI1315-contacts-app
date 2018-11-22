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
    for (let i = 0; i < this.contacts.length; i++) {
      if (contact.id === this.contacts[i].id) {
        this.contacts.splice(i, 1);
      }
    }
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
    let copy: Contact;
    for (const contact of this.contacts) {
      if (contact.id === Number(id)) {
        copy = Object.assign({}, contact);
      }
    }
    return copy;
  }

  editContact(contact: Contact) {
    for (let i = 0; i < this.contacts.length; i++) {
      if (contact.id === this.contacts[i].id) {
        this.contacts[i] = contact;
      }
    }
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.contacts));
  }
}


