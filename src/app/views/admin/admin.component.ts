import { Component, OnInit } from '@angular/core';
import { itemsAdmin } from './admin.menu';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styles: []
})
export class AdminComponent implements OnInit {
  
  title = 'PortAdmin'

  menu_items = itemsAdmin;

  constructor() { }

  ngOnInit() {
  }

  
}
