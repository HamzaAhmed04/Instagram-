import React from 'react';
import Header from './components/Header';
import Stories from './components/Stories';
import Feed from './components/Feed';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-5xl mx-auto pt-20 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Stories />
            <Feed />
          </div>
          <div className="hidden md:block">
            <div className="fixed w-80">
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop"
                  alt="Your profile"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="font-semibold">your_username</div>
                  <div className="text-gray-500 text-sm">Your Name</div>
                </div>
              </div>
              
              <div className="text-sm text-gray-500">
                © 2024 Instagram Clone
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;