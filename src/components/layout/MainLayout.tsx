'use client';

import { Search, Plus, CheckSquare, MessageCircle, Folder, Tag } from 'lucide-react';
import Link from 'next/link';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 w-64 bg-white border-r border-gray-200">
        <div className="flex flex-col h-full">
          <div className="p-4">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-xl font-semibold text-gray-900">Notes Platform</h1>
              <button className="p-2 text-gray-500 hover:text-gray-700">
                <Plus className="w-5 h-5" />
              </button>
            </div>

            <nav className="space-y-1">
              <Link href="/" className="flex items-center px-3 py-2 text-sm font-medium text-gray-900 rounded-md bg-gray-100">
                <Folder className="w-5 h-5 mr-3" />
                All Notes
              </Link>
              <Link href="/checklist" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50">
                <CheckSquare className="w-5 h-5 mr-3" />
                Checklists
              </Link>
              <Link href="/chat" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50">
                <MessageCircle className="w-5 h-5 mr-3" />
                Chat
              </Link>
            </nav>

            <div className="mt-8">
              <h2 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Tags</h2>
              <div className="mt-2 space-y-1">
                <Link href="/tags/documents" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50">
                  <Tag className="w-4 h-4 mr-3" />
                  Documents
                </Link>
                <Link href="/tags/meetings" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50">
                  <Tag className="w-4 h-4 mr-3" />
                  Meetings
                </Link>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 ml-64">
        {/* Header */}
        <header className="fixed top-0 right-0 left-64 bg-white border-b border-gray-200 z-10">
          <div className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex-1 max-w-lg">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search notes..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <button className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                New Note
              </button>
            </div>
          </div>
        </header>

        {/* Page content */}
        <div className="pt-20 p-6 bg-gray-50 min-h-screen">
          {children}
        </div>
      </main>
    </div>
  );
} 