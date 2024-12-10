'use client';

import { Search, Plus } from 'lucide-react';

export default function Navbar() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center flex-1">
        <div className="w-full max-w-lg">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search notes..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          New Note
        </button>
      </div>
    </div>
  );
}