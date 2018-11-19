import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ToolbarOptions} from '../toolbar-options';
import {ToolbarService} from '../toolbar.service';
import {ToolbarAction} from '../toolbar-action';
import {Location} from '@angular/common';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Output() menuClick: EventEmitter<any>;
  options: ToolbarOptions;
  mainAction: ToolbarAction;

  constructor(private toolbar: ToolbarService, private location: Location) {
    this.menuClick = new EventEmitter<any>();
    this.options = new ToolbarOptions('menu', 'Contacts Application');
    this.mainAction = new ToolbarAction(this.onMenuClick.bind(this), 'menu');
  }

  ngOnInit() {
    this.toolbar.getToolbarOptions().subscribe(options => {
      this.options = options;
      if (this.options.mode === 'menu') {
        this.mainAction = new ToolbarAction(this.onMenuClick.bind(this), 'menu');
      } else if (this.options.mode === 'back') {
        this.mainAction = new ToolbarAction(this.onNavigationBack.bind(this), 'arrow_back');
      }
    });
  }


  onMenuClick() {
    this.menuClick.emit();
  }

  onNavigationBack() {
    this.location.back();
  }
}


