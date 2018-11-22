import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Contact} from '../contact';
import {Router} from '@angular/router';
import {ContactLocalStorageService} from '../service/contact-local-storage.service';
import {ContactService} from '../service/contact.service';

@Component({
  selector: 'app-contact-list-item',
  templateUrl: './contact-list-item.component.html',
  styleUrls: ['./contact-list-item.component.css']
})
export class ContactListItemComponent implements OnInit {

  @Input() contact: Contact;
  @Output() contactSelect: EventEmitter<any>;

  constructor(private contactLocalStorage: ContactLocalStorageService, private router: Router,
              private contactService: ContactService) {
    this.contactSelect = new EventEmitter<any>();

  }

  ngOnInit() {
  }

  onContactSelect() {
    this.contactSelect.emit();
  }

  onDelete(contact: Contact) {
  this.contactService.removeContact(contact);
  }

  editItem() {
    this.router.navigate(['/contacts/edit', this.contact.id]);
  }
}
