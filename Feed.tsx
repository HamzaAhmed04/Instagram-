import React from 'react';
import Post from './Post';

const posts = [
  {
    id: 1,
    username: 'john_doe',
    userImage: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop',
    image: 'https://images.unsplash.com/photo-1516245834210-c4c142787335?w=800&h=800&fit=crop',
    caption: 'Beautiful sunset at the beach! 🌅',
    likes: 1234,
  },
  {
    id: 2,
    username: 'jane_smith',
    userImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    image: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=800&h=800&fit=crop',
    caption: 'Perfect morning coffee ☕',
    likes: 856,
  },
];

export default function Feed() {
  return (
    <div className="max-w-xl mx-auto">
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
}