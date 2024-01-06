import { Component } from '@angular/core';
import { MenuTitleComponent } from '../../components/menu-title/menu-title.component';
import { LargeCardComponent } from '../../components/card/large/large-card.component';
import { SmallCardComponent } from '../../components/card/small/small-card.component';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  imports: [MenuTitleComponent, LargeCardComponent, SmallCardComponent],
  standalone: true,
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
