import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Contact} from '../contact';
import {ContactService} from '../service/contact.service';
import {ToolbarService} from '../../ui/toolbar/toolbar.service';
import {ToolbarOptions} from '../../ui/toolbar/toolbar-options';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  contact: Contact;

  constructor(private router: Router, private route: ActivatedRoute,
              private contactService: ContactService, private toolbar: ToolbarService) {
    this.contact = new Contact();
  }

  ngOnInit() {
    const contactId = this.route.snapshot.paramMap.get('id');
    this.toolbar.setToolbarOptions(new ToolbarOptions('back', 'Create contact'));
    this.router.navigate(['/contacts/new']);
  }

  onSave(): void {
    this.router.navigate(['/contacts']);
    this.contactService.addContact(this.contact);
  }

  editItem() {
    this.router.navigate(['contacts/edit', this.contact.id]);
  }
}
