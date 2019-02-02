import { Component, OnInit } from '@angular/core';
import { NbMenuService } from '@nebular/theme';
import { itemsClient } from './client.menu';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styles: []
})
export class ClientComponent implements OnInit {

  menu_items = itemsClient;
  title = 'MaxLearn'

  constructor(private nbMenuServices: NbMenuService) { }

  ngOnInit() {
  }

}
