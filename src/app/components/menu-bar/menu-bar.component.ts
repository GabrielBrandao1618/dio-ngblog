import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'menu-bar',
  templateUrl: 'menu-bar.component.html',
  styleUrls: ['menu-bar.component.scss'],
  imports: [RouterLink],
})
export class MenuBarComponent {}
