import { Component, OnInit, Input } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.scss']
})
export class NavbarAdminComponent implements OnInit {
  @Input() titleh: string = 'Admin';

  user: any = {
    name: 'Star Lord',
    email: 'example@mail.com',
    picture: 'https://image.flaticon.com/icons/svg/149/149452.svg'
  };

  userMenu = [
    { title: 'Profile', icon: 'nb-person' },
    { title: 'Account Settings', icon: 'nb-gear' },
    { title: 'Log out', icon: 'nb-power' }
  ];

  messages: { name: string, title: string }[] = [
    { name: 'Carla Espinosa', title: 'Nurse' },
    { name: 'Bob Kelso', title: 'Doctor of Medicine' },
    { name: 'Janitor', title: 'Janitor' },
    { name: 'Perry Cox', title: 'Doctor of Medicine' }
  ];

  notis: { name: string, title: string, created_at: string }[] = [
    { name: 'Ben Sullivan', title: 'Carpenter and photographer dasd...', created_at: '6:20PM' },
    { name: 'Carla Espinosa', title: 'Nurse', created_at: '6:20PM' },
    { name: 'Bob Kelso', title: 'Doctor of Medicine', created_at: '6:20PM' },
    { name: 'Janitor', title: 'Janitor', created_at: '6:20PM' },
    { name: 'Perry Cox', title: 'Doctor of Medicine', created_at: '6:20PM' },
  ];

  constructor(
    private sidebarService: NbSidebarService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  toggleSidebar(){
    this.sidebarService.toggle(true);
    return false
  }

  goToHome() {
    this.router.navigate(['/dashboard'])
  }

  toggleNotifications() {
    
  }

}
