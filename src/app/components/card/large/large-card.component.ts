import { Component, Input } from '@angular/core';
import { BlogPost } from '../../../model/blog-post';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'card-lg',
  templateUrl: './large-card.component.html',
  standalone: true,
  styleUrls: ['./large-card.component.scss'],
  imports: [RouterLink],
})
export class LargeCardComponent {
  @Input() post?: BlogPost;
}
