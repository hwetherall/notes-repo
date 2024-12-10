'use client';

import Link from 'next/link';
import { FC } from 'react';
import { Folder, CheckSquare, MessageCircle, Tag } from 'lucide-react';
import { useNotes } from '@/context/NotesContext';

const Sidebar: FC = () => {
  const { notes } = useNotes();
  const uniqueTags = Array.from(new Set(notes.flatMap(note => note.tags)));

  return (
    <div className="w-64 bg-gray-50 p-4 h-screen">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-bold">Notes Platform</h1>
      </div>

      <nav>
        <Link href="/" className="flex items-center px-4 py-2 hover:bg-gray-200 rounded">
          <Folder className="w-5 h-5 mr-3" />
          All Notes
        </Link>
        <Link href="/checklists" className="flex items-center px-4 py-2 hover:bg-gray-200 rounded">
          <CheckSquare className="w-5 h-5 mr-3" />
          Checklists
        </Link>
        <Link href="/chat" className="flex items-center px-4 py-2 hover:bg-gray-200 rounded">
          <MessageCircle className="w-5 h-5 mr-3" />
          Chat
        </Link>

        <div className="mt-6">
          <h2 className="text-sm font-semibold text-gray-600 mb-2">TAGS</h2>
          {uniqueTags.map(tag => (
            <Link 
              key={tag} 
              href={`/tags/${tag}`} 
              className="flex items-center px-4 py-2 hover:bg-gray-200 rounded"
            >
              <Tag className="w-4 h-4 mr-3" />
              {tag}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;