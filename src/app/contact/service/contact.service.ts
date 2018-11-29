import {Injectable} from '@angular/core';
import {Contact} from '../contact';
import {Observable} from 'rxjs';
import {ContactProvider} from '../interfaces/contact-provider';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contacts: Contact[];

  constructor(private contactProvider: ContactProvider) {
    this.contacts = [];
  }

  getContacts(): Observable<Contact[]> {
    return this.contactProvider.get();
  }

  deleteContact(contact: Contact): Observable<any> {
    return this.contactProvider.delete(contact);
  }

  addContact(contact: Contact): Observable<Contact> {
    return this.contactProvider.create(contact);
  }

  getContactById(id: string): Observable<Contact> {
    return this.contactProvider.getById(id);
  }

  editContact(contact: Contact): Observable<Contact> {
    return this.contactProvider.edit(contact);
  }
}


