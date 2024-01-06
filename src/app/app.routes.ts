import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PostComponent } from './pages/post/post.component';
import { NotFoundPostComponent } from './pages/post/not-found/not-found-post.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'post',
    component: NotFoundPostComponent,
  },
  {
    path: 'post/:id',
    component: PostComponent,
  },
];
