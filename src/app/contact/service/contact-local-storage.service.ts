import {Injectable} from '@angular/core';
import {Contact} from '../contact';
import {ContactProvider} from '../interfaces/contact-provider';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactLocalStorageService implements ContactProvider{

  localStorageKey = 'contacts-app';
  contacts: Contact [];

  constructor() {
    if (!localStorage.getItem(this.localStorageKey)) {
      localStorage.setItem(this.localStorageKey, JSON.stringify([]));
    }
    const storageElement = localStorage.getItem(this.localStorageKey);
    this.contacts = JSON.parse(storageElement);
  }

  get(): Observable<Contact[]> {
    return of(this.contacts);
  }

  delete (contact: Contact): Observable<any> {
    for (let i = 0; i < this.contacts.length; i++) {
      if (contact.id === this.contacts[i].id) {
        this.contacts.splice(i, 1);
      }
    }
    localStorage.removeItem(this.localStorageKey);
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.contacts));
    return of(contact);
  }

  create (contact: Contact): Observable<Contact> {
    let lastId = 1;
    if (this.contacts.length > 0) {
      lastId = this.contacts[this.contacts.length - 1].id;
      lastId = lastId + 1;
    }
    contact.id = lastId;
    this.contacts.push(contact);
    localStorage.removeItem(this.localStorageKey);
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.contacts));
    return of(contact);
  }

  getById(id: string): Observable<Contact> {
    let contactCopy: Contact;
    for (const contact of this.contacts) {
      if (contact.id === Number(id)) {
        contactCopy = Object.assign({}, contact);
      }
    }
    return of(contactCopy);
  }

  edit(contact: Contact): Observable<Contact> {
    for (let i = 0; i < this.contacts.length; i++) {
      if (contact.id === this.contacts[i].id) {
        this.contacts[i] = contact;
      }
    }
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.contacts));
    return of(contact);
  }
}


