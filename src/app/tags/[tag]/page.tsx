"use client";

import { FC } from 'react';
import { useParams } from 'next/navigation';
import NoteList from '@/components/notes/NoteList';
import { useNotes } from '@/context/NotesContext';

const TagPage: FC = () => {
  const params = useParams();
  const tag = params.tag as string;
  const { notes } = useNotes();

  const filteredNotes = notes.filter(note => 
    note.tags.includes(tag.toLowerCase())
  );

  return (
    <main className="flex-1 p-6">
      <h1 className="text-2xl font-bold mb-6">Notes tagged with: {tag}</h1>
      <NoteList notes={filteredNotes} />
    </main>
  );
};

export default TagPage; 