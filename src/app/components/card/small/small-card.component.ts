import { Component, Input } from '@angular/core';
import { BlogPost } from '../../../model/blog-post';
import { NgFor } from '@angular/common';

@Component({
  selector: 'card-sm',
  templateUrl: 'small-card.component.html',
  styleUrls: ['./small-card.component.scss'],
  imports: [NgFor],
  standalone: true,
})
export class SmallCardComponent {
  @Input() post?: BlogPost;
}
