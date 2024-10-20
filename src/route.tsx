
import { NextResponse } from 'next/server';

export async function GET() {
    const images = [
        { id: 1, url: 'path/to/local/image1.jpg', description: 'Jupiter' },
        { id: 2, url: 'path/to/local/image2.jpg', description: 'Lua' },
        { id: 3, url: 'path/to/local/image2.jpg', description: 'Sol' },
    ];

    return NextResponse.json(images);
}

export async function GET_NASA_API() {
    const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY');
    const data = await response.json();

    return NextResponse.json(data);
}
