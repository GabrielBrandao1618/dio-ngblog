import { Component, Input } from '@angular/core';
import { BlogPost } from '../../../model/blog-post';

@Component({
  selector: 'card-lg',
  templateUrl: './large-card.component.html',
  standalone: true,
  styleUrls: ['./large-card.component.scss'],
})
export class LargeCardComponent {
  @Input() post?: BlogPost;
}
