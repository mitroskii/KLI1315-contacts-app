import {Injectable} from '@angular/core';
import {Contact} from '../contact';
import {ContactLocalStorageService} from './contact-local-storage.service';
import {ContactHttpService} from './contact-http.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contacts: Contact[];

  constructor(private contactLocalStorage: ContactLocalStorageService,
              private contactHttpService: ContactHttpService) {
    this.contacts = [];
  }

  getContacts(): Observable<Contact[]> {
    return this.contactHttpService.get();
  }

  removeContact(contact: Contact) {
    this.contactLocalStorage.removeContact(contact);
  }

  addContact(contact: Contact) {
    this.contactLocalStorage.addContact(contact);
  }

  getContactById(id: string): Observable<Contact> {
    return this.contactHttpService.getById(id);
  }

  editContact(contact: Contact) {
    return this.contactLocalStorage.editContact(contact);
  }
}


