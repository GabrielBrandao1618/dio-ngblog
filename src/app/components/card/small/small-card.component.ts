import { Component, Input } from '@angular/core';
import { BlogPost } from '../../../model/blog-post';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'card-sm',
  templateUrl: 'small-card.component.html',
  styleUrls: ['./small-card.component.scss'],
  standalone: true,
  imports: [RouterLink],
})
export class SmallCardComponent {
  @Input() post?: BlogPost;
}
