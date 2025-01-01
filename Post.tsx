import React from 'react';
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from 'lucide-react';

interface PostProps {
  username: string;
  userImage: string;
  image: string;
  caption: string;
  likes: number;
}

export default function Post({ username, userImage, image, caption, likes }: PostProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg mb-4">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-3">
          <img src={userImage} alt={username} className="w-8 h-8 rounded-full" />
          <span className="font-semibold">{username}</span>
        </div>
        <MoreHorizontal className="w-5 h-5 cursor-pointer" />
      </div>

      <img src={image} alt="Post" className="w-full aspect-square object-cover" />

      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <Heart className="w-6 h-6 cursor-pointer" />
            <MessageCircle className="w-6 h-6 cursor-pointer" />
            <Send className="w-6 h-6 cursor-pointer" />
          </div>
          <Bookmark className="w-6 h-6 cursor-pointer" />
        </div>

        <div className="font-semibold mb-2">{likes.toLocaleString()} likes</div>
        
        <div>
          <span className="font-semibold mr-2">{username}</span>
          {caption}
        </div>
      </div>
    </div>
  );
}