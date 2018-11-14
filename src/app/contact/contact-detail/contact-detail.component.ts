import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Contact} from '../contact';
import {ContactService} from '../service/contact.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  contact: Contact;

  constructor(private router: Router, private contactService: ContactService) {
    this.contact = new Contact();
  }

  ngOnInit() {
  }

  onSave(): void {
    this.router.navigate(['/contacts']);
    this.contactService.addContact(this.contact);
  }
}
