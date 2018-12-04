import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Contact} from '../contact';
import {Router} from '@angular/router';
import {ContactLocalStorageService} from '../service/contact-local-storage.service';
import {ContactService} from '../service/contact.service';
import {MatDialog, MatSnackBar} from '@angular/material';
import {DialogConfirmComponent} from '../../ui/dialog-confirm/dialog-confirm/dialog-confirm.component';

@Component({
  selector: 'app-contact-list-item',
  templateUrl: './contact-list-item.component.html',
  styleUrls: ['./contact-list-item.component.css']
})
export class ContactListItemComponent implements OnInit {

  @Input() contact: Contact;
  @Output() contactDeleted: EventEmitter<any>;

  constructor(private contactLocalStorage: ContactLocalStorageService, private router: Router,
              private contactService: ContactService, private snackBar: MatSnackBar,
              private dialog: MatDialog) {
    this.contactDeleted = new EventEmitter<any>();

  }

  ngOnInit() {
  }

  editItem() {
    this.router.navigate(['contacts/edit', this.contact.id]);
  }

  removeContact() {
    const dialogRef = this.dialog.open(DialogConfirmComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.contactService.deleteContact(this.contact).subscribe(() => {
          this.snackBar.open('Contact removed!', '', {
            duration: 3000
          });
          this.contactDeleted.emit(this.contact);
        });
    }});
  }

  navigateToMap() {
    this.router.navigate(['contacts/map', {address: this.contact.address,
      city: this.contact.city }]);
  }
}
