import { BlogPost } from '../model/blog-post';

export const posts: BlogPost[] = [
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
];
export function getPostById(id: number): BlogPost | null {
  return posts.find((post) => post.id === id) ?? null;
}
