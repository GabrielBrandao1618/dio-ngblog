import { Component, Input } from '@angular/core';
import { BlogPost } from '../../../model/blog-post';

@Component({
  selector: 'card-sm',
  templateUrl: 'small-card.component.html',
  styleUrls: ['./small-card.component.scss'],
  standalone: true,
})
export class SmallCardComponent {
  @Input() post?: BlogPost;
}
