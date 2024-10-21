import { NextResponse } from 'next/server';

export async function GET() {
    try {
        // Lista de imagens locais
        const images = [
            { id: 1, url: 'path/to/local/image1.jpg', description: 'Jupiter' },
            { id: 2, url: 'path/to/local/image2.jpg', description: 'Lua' },
            { id: 3, url: 'path/to/local/image2.jpg', description: 'Sol' },
        ];

        // Chamada para a API da NASA
        const nasaResponse = await fetch('https://api.nasa.gov/planetary/apod?api_key=qbcjJ4FcGbn1hKw9HbDusviZJ48nURJ8kud1PIoP');
        const nasaData = await nasaResponse.json();

        // Adiciona a imagem da NASA à lista
        images.push({
            id: 4,
            url: nasaData.url,
            description: nasaData.explanation
        });

        // Retorna a lista de imagens (locais + NASA)
        return NextResponse.json(images);
    } catch (error) {
        // Lida com possíveis erros
        console.log(error);
        return NextResponse.json({ error: 'Failed to fetch data from NASA API' }, { status: 500 });
    }
}
