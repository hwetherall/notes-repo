'use client';

import { FC } from 'react';
import { Note } from '@/lib/types';
import Link from 'next/link';

interface NoteListProps {
  notes: Note[];
}

const NoteList: FC<NoteListProps> = ({ notes }) => {
  if (notes.length === 0) {
    return (
      <div className="text-center text-gray-500 mt-8">
        No notes found
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {notes.map(note => (
        <div key={note.id} className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
          <h3 className="font-bold mb-2">{note.title}</h3>
          <p className="text-gray-600 mb-2">{note.content.substring(0, 100)}...</p>
          <div className="flex flex-wrap gap-2">
            {note.tags.map(tag => (
              <Link 
                key={tag} 
                href={`/tags/${tag}`}
                className="px-2 py-1 bg-gray-200 rounded-full text-sm hover:bg-gray-300"
              >
                {tag}
              </Link>
            ))}
          </div>
          <div className="text-xs text-gray-500 mt-2">
            {new Date(note.createdAt).toLocaleDateString()}
          </div>
        </div>
      ))}
    </div>
  );
};

export default NoteList;