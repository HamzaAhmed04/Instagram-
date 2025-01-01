import React from 'react';
import { Search, Heart, MessageCircle, PlusSquare, Home, Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <h1 className="text-xl font-semibold">Instagram</h1>
        
        <div className="hidden md:flex items-center space-x-4 flex-1 max-w-xs mx-8">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-gray-100 rounded-lg py-1 px-4 pl-10"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
        </div>

        <nav className="flex items-center space-x-6">
          <Home className="w-6 h-6 cursor-pointer" />
          <MessageCircle className="w-6 h-6 cursor-pointer" />
          <PlusSquare className="w-6 h-6 cursor-pointer" />
          <Heart className="w-6 h-6 cursor-pointer" />
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop"
            alt="Profile"
            className="w-7 h-7 rounded-full cursor-pointer"
          />
        </nav>
      </div>
    </header>
  );
}