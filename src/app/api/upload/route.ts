import { NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import path from 'path';

export async function POST(request: Request) {
    try {
        const data = await request.formData();
        const file: File | null = data.get('file') as unknown as File;

        if (!file) {
            return NextResponse.json(
                { error: "No file provided" },
                { status: 400 }
            );
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // Save to local filesystem (replace with proper storage in production)
        const filename = `${Date.now()}-${file.name}`;
        const filepath = path.join(process.cwd(), 'public', 'uploads', filename);
        await writeFile(filepath, buffer);

        return NextResponse.json({
            message: "File uploaded successfully",
            filename,
            url: `/uploads/${filename}`
        });
    } catch (error) {
        return NextResponse.json(
            { error: "Error uploading file" },
            { status: 500 }
        );
    }
}