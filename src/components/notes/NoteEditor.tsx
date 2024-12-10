"use client";

import { FC, useState } from 'react';
import { Note } from '@/lib/types';

interface NoteEditorProps {
  onSave: (note: Partial<Note>) => void;
  onCancel: () => void;
  availableTags: string[];
}

const NoteEditor: FC<NoteEditorProps> = ({ onSave, onCancel, availableTags }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      title,
      content,
      tags: selectedTags,
    });
    setTitle('');
    setContent('');
    setSelectedTags([]);
  };

  const handleTagAdd = (tag: string) => {
    const normalizedTag = tag.toLowerCase().trim();
    if (normalizedTag && !selectedTags.includes(normalizedTag)) {
      setSelectedTags(prev => [...prev, normalizedTag]);
    }
    setNewTag('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Note title"
        className="w-full p-2 border rounded"
        required
      />
      
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Note content"
        className="w-full p-2 border rounded h-32"
        required
      />

      <div>
        <div className="flex flex-wrap gap-2 mb-2">
          {selectedTags.map(tag => (
            <span 
              key={tag} 
              className="px-2 py-1 bg-blue-100 rounded-full text-sm flex items-center"
            >
              {tag}
              <button
                type="button"
                onClick={() => setSelectedTags(prev => prev.filter(t => t !== tag))}
                className="ml-2 text-red-500"
              >
                ×
              </button>
            </span>
          ))}
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            value={newTag}
            onChange={(e) => setNewTag(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                handleTagAdd(newTag);
              }
            }}
            placeholder="Add a tag"
            className="flex-1 p-2 border rounded"
          />
          <button
            type="button"
            onClick={() => handleTagAdd(newTag)}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Add Tag
          </button>
        </div>
      </div>

      <div className="flex justify-end gap-2">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border rounded"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Save Note
        </button>
      </div>
    </form>
  );
};

export default NoteEditor;