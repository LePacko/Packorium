import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  items: MenuItem[] = [];
  activeItem!: MenuItem;


  title = 'formterrarium';

  ngOnInit() {
    this.items = [
        {label: 'Home', icon: 'pi pi-fw pi-home',routerLink: ['/home']},
        {label: 'Contact', icon: 'pi pi-fw pi-pencil',routerLink: ['/form']},
        {label: 'Galerie', icon: 'pi pi-fw pi-file',routerLink: ['/photo']},
    ];

    this.activeItem = this.items[0];

  }

}