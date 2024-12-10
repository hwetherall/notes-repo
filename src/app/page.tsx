"use client";

import { FC, useState } from 'react';
import NoteEditor from '@/components/notes/NoteEditor';
import { useNotes } from '@/context/NotesContext';
import NoteList from '@/components/notes/NoteList';
import { Note } from '@/lib/types';

const NotesPage: FC = () => {
  const [showEditor, setShowEditor] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { notes, addNote } = useNotes();

  const handleSaveNote = (noteData: Partial<Note>) => {
    addNote(noteData);
    setShowEditor(false);
  };

  const filteredNotes = notes.filter(note => 
    note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    note.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="flex-1 p-6">
      <div className="mb-6 flex justify-between items-center">
        <input
          type="text"
          placeholder="Search notes..."
          className="w-64 px-4 py-2 border rounded-lg"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          onClick={() => setShowEditor(true)}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          New Note
        </button>
      </div>

      {showEditor ? (
        <div className="mb-6">
          <NoteEditor
            onSave={handleSaveNote}
            onCancel={() => setShowEditor(false)}
            availableTags={Array.from(new Set(notes.flatMap(note => note.tags)))}
          />
        </div>
      ) : (
        <NoteList notes={filteredNotes} />
      )}
    </main>
  );
};

export default NotesPage;