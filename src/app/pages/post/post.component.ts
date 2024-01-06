import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogPost } from '../../model/blog-post';
import { getPostById } from '../../data/posts';

@Component({
  templateUrl: './post.component.html',
  selector: 'post-page',
  standalone: true,
  styleUrls: ['post.component.scss'],
})
export class PostComponent implements OnInit {
  postData?: BlogPost;
  constructor(
    private readonly activatedRouter: ActivatedRoute,
    private readonly router: Router
  ) {}
  ngOnInit(): void {
    this.activatedRouter.params.subscribe((params) => {
      const id: number = Number(params['id']);
      const foundPost = getPostById(id);
      if (foundPost === null) {
        this.router.navigate(['/post']);
        return;
      }
      this.postData = foundPost;
    });
  }
}
