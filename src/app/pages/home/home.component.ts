import { Component } from '@angular/core';
import { MenuTitleComponent } from '../../components/menu-title/menu-title.component';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  imports: [MenuTitleComponent],
  standalone: true,
})
export class HomeComponent {}
