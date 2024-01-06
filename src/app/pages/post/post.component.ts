import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './post.component.html',
  selector: 'post-page',
})
export class PostComponent implements OnInit {
  id?: number;
  constructor(private readonly activatedRouter: ActivatedRoute) {}
  ngOnInit(): void {
    this.activatedRouter.params.subscribe((params) => (this.id = params['id']));
  }
}
