import { Component } from '@angular/core';
import { MenuTitleComponent } from '../../components/menu-title/menu-title.component';
import { LargeCardComponent } from '../../components/card/large/large-card.component';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  imports: [MenuTitleComponent, LargeCardComponent],
  standalone: true,
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
