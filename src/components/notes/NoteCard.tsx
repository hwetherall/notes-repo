'use client';

import { FC } from 'react';
import { Calendar } from 'lucide-react';
import { Note } from '@/lib/types';

interface NoteCardProps {
  note: Note;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
}

const NoteCard: FC<NoteCardProps> = ({ note }) => {
  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-gray-500 flex items-center">
          <Calendar className="w-4 h-4 mr-1" />
          {new Date(note.createdAt).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
          })}
        </span>
      </div>
      <h3 className="text-lg font-medium text-gray-900 mb-2">{note.title}</h3>
      <p className="text-sm text-gray-600 line-clamp-3">
        {note.content}
      </p>
    </div>
  );
};

export default NoteCard;