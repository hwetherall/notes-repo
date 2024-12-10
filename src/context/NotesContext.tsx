"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Note } from '@/lib/types';

interface NotesContextType {
  notes: Note[];
  addNote: (note: Partial<Note>) => void;
  updateNote: (note: Note) => void;
  deleteNote: (id: string) => void;
}

const NotesContext = createContext<NotesContextType | undefined>(undefined);

export function NotesProvider({ children }: { children: ReactNode }) {
  const [notes, setNotes] = useState<Note[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);

  // Load notes from localStorage on initial mount
  useEffect(() => {
    try {
      const storedNotes = localStorage.getItem('notes');
      if (storedNotes) {
        setNotes(JSON.parse(storedNotes));
      }
    } catch (error) {
      console.error('Error loading notes:', error);
    }
    setIsInitialized(true);
  }, []);

  // Save notes to localStorage whenever they change
  useEffect(() => {
    if (isInitialized) {
      try {
        localStorage.setItem('notes', JSON.stringify(notes));
      } catch (error) {
        console.error('Error saving notes:', error);
      }
    }
  }, [notes, isInitialized]);

  const addNote = (noteData: Partial<Note>) => {
    const newNote: Note = {
      id: crypto.randomUUID(),
      title: noteData.title || '',
      content: noteData.content || '',
      tags: noteData.tags || [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    setNotes(prev => [...prev, newNote]);
  };

  const updateNote = (updatedNote: Note) => {
    setNotes(prev => prev.map(note => 
      note.id === updatedNote.id 
        ? { ...updatedNote, updatedAt: new Date().toISOString() }
        : note
    ));
  };

  const deleteNote = (id: string) => {
    setNotes(prev => prev.filter(note => note.id !== id));
  };

  return (
    <NotesContext.Provider value={{ notes, addNote, updateNote, deleteNote }}>
      {children}
    </NotesContext.Provider>
  );
}

export function useNotes() {
  const context = useContext(NotesContext);
  if (context === undefined) {
    throw new Error('useNotes must be used within a NotesProvider');
  }
  return context;
} 