import { BlogPost } from '../model/blog-post';

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    description: 'This is the first post',
    photo: 'https://via.placeholder.com/600/e01d41',
    title: 'First post!',
  },
  {
    id: 2,
    description: 'This is the second post',
    photo: 'https://via.placeholder.com/600/621de0',
    title: 'Second post!',
  },
  {
    id: 3,
    description: 'This is the third post',
    photo: 'https://via.placeholder.com/600/621de0',
    title: 'Third post!',
  },
  {
    id: 4,
    description: 'This is the fourth post',
    photo: 'https://via.placeholder.com/600/621de0',
    title: 'Fourth post!',
  },
];
export function getPostById(id: number): BlogPost | null {
  return blogPosts.find((post) => post.id === id) ?? null;
}
