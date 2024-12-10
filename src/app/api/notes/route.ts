import { NextResponse } from 'next/server';
import { Note } from '@/lib/types';

// This will simulate our "database" in memory
let notes: Note[] = [];

export async function GET() {
    // Sort notes by createdAt in descending order
    const sortedNotes = [...notes].sort((a, b) => 
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
    return NextResponse.json(sortedNotes);
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { title, content, tags } = body;

        if (!title || !content) {
            return NextResponse.json(
                { error: 'Title and content are required' },
                { status: 400 }
            );
        }

        const newNote: Note = {
            id: Math.random().toString(36).substring(2, 9),
            title,
            content,
            tags: tags || [],
            createdAt: new Date(),
            updatedAt: new Date()
        };

        notes.push(newNote);
        return NextResponse.json(newNote);
    } catch (error) {
        console.error('Error creating note:', error);
        return NextResponse.json(
            { error: 'Error creating note' },
            { status: 500 }
        );
    }
}

export async function PUT(request: Request) {
    try {
        const updatedNote = await request.json();
        notes = notes.map(note => 
            note.id === updatedNote.id 
                ? { ...updatedNote, updatedAt: new Date() } 
                : note
        );
        return NextResponse.json(updatedNote);
    } catch (error) {
        return NextResponse.json(
            { error: 'Error updating note' },
            { status: 500 }
        );
    }
}

export async function DELETE(request: Request) {
    try {
        const { id } = await request.json();
        notes = notes.filter(note => note.id !== id);
        return NextResponse.json({ id });
    } catch (error) {
        return NextResponse.json(
            { error: 'Error deleting note' },
            { status: 500 }
        );
    }
}